// ============================================================
// whisperTranscriber.js
// Local Whisper transcription via Transformers.js (WASM/WebGPU)
// Runs entirely in the browser — no API keys, no cost.
//
// Anti-hallucination measures:
//  - Skip silent/low-energy audio chunks (RMS threshold)
//  - Detect and truncate in-chunk repetition loops
//  - Post-process to remove cross-chunk repeated sentences
// ============================================================

class WhisperTranscriber {
  constructor(logFn) {
    this.log = logFn || console.log;
    this.pipeline = null;
  }

  /**
   * Load the Whisper model. First call downloads ~75MB, then it's cached.
   */
  async loadModel() {
    if (this.pipeline) {
      this.log("Whisper model already loaded.");
      return;
    }

    this.log("Loading Whisper model (onnx-community/whisper-tiny)...");
    this.log("First time will download ~75MB — cached for future use.");

    // Dynamic import of the local ESM bundle (MV3 allows import() for 'self' scripts)
    const HF = await import("./transformers.min.js");

    // Disable local model check (always fetch from HuggingFace Hub)
    if (HF.env) HF.env.allowLocalModels = false;

    // Point ONNX Runtime WASM files to local copies (CDN is blocked by MV3 CSP)
    const localWasmDir = location.href.substring(
      0,
      location.href.lastIndexOf("/") + 1,
    );
    if (HF.env && HF.env.backends && HF.env.backends.onnx) {
      HF.env.backends.onnx.wasm.wasmPaths = localWasmDir;
    }

    this.pipeline = await HF.pipeline(
      "automatic-speech-recognition",
      "onnx-community/whisper-tiny",
      {
        dtype: "q8", // Quantized for smaller download & faster inference
        device: "wasm", // WASM backend (works everywhere)
      },
    );

    this.log("✅ Whisper model loaded successfully!");
  }

  /**
   * Decode raw audio bytes (AAC/ADTS) into 16kHz mono Float32Array.
   */
  async decodeAudioToFloat32(audioBuffer) {
    this.log("Decoding audio to 16kHz PCM...");

    const audioCtx = new AudioContext({ sampleRate: 16000 });

    let decodedBuffer;
    try {
      decodedBuffer = await audioCtx.decodeAudioData(audioBuffer.slice(0));
    } catch (e) {
      this.log("⚠ Direct decode failed, trying with OfflineAudioContext...");
      const tempCtx = new AudioContext();
      const tempBuffer = await tempCtx.decodeAudioData(audioBuffer.slice(0));
      await tempCtx.close();

      const offlineCtx = new OfflineAudioContext(
        1,
        Math.ceil(tempBuffer.duration * 16000),
        16000,
      );
      const source = offlineCtx.createBufferSource();
      source.buffer = tempBuffer;
      source.connect(offlineCtx.destination);
      source.start(0);
      decodedBuffer = await offlineCtx.startRendering();
    }

    await audioCtx.close();

    // Mix down to mono
    let pcm;
    if (decodedBuffer.numberOfChannels === 1) {
      pcm = decodedBuffer.getChannelData(0);
    } else {
      pcm = new Float32Array(decodedBuffer.length);
      for (let ch = 0; ch < decodedBuffer.numberOfChannels; ch++) {
        const channelData = decodedBuffer.getChannelData(ch);
        for (let i = 0; i < pcm.length; i++) {
          pcm[i] += channelData[i];
        }
      }
      const numCh = decodedBuffer.numberOfChannels;
      for (let i = 0; i < pcm.length; i++) {
        pcm[i] /= numCh;
      }
    }

    const durationMin = (pcm.length / 16000 / 60).toFixed(1);
    this.log(`Audio decoded: ${durationMin} minutes at 16kHz mono.`);
    return pcm;
  }

  // ── Anti-hallucination helpers ──

  /**
   * Calculate RMS (root mean square) energy of an audio chunk.
   * Silent/near-silent audio has very low RMS and causes Whisper to hallucinate.
   */
  _rms(samples) {
    let sum = 0;
    for (let i = 0; i < samples.length; i++) {
      sum += samples[i] * samples[i];
    }
    return Math.sqrt(sum / samples.length);
  }

  /**
   * Detect repetition loops in text using n-gram analysis.
   * Returns cleaned text with repetitions removed.
   *
   * Example: "Okay. Okay. Okay. Okay. Okay." → "Okay."
   */
  _removeRepetitions(text) {
    if (!text || text.length < 20) return text;

    // Split into sentences/phrases
    const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => s.trim());
    if (sentences.length < 3) return text;

    // Detect consecutive duplicate sentences
    const cleaned = [sentences[0]];
    let repeatCount = 0;
    const MAX_REPEATS = 2; // Allow at most 2 consecutive identical sentences

    for (let i = 1; i < sentences.length; i++) {
      const prev = cleaned[cleaned.length - 1].trim().toLowerCase();
      const curr = sentences[i].trim().toLowerCase();

      if (curr === prev) {
        repeatCount++;
        if (repeatCount < MAX_REPEATS) {
          cleaned.push(sentences[i]);
        }
      } else {
        repeatCount = 0;
        cleaned.push(sentences[i]);
      }
    }

    let result = cleaned.join(" ");

    // Also catch word-level repetition patterns like "you you you you"
    // Match any word repeated 3+ times in a row
    result = result.replace(/\b(\w+(?:\s+\w+){0,3})(?:\s+\1){2,}/gi, "$1");

    // Catch comma-separated repetitions: "or is, or is, or is, or is,"
    result = result.replace(/(\b\w+(?:\s+\w+){0,4},)(?:\s*\1){2,}/gi, "$1");

    return result.trim();
  }

  /**
   * Check if text is mostly hallucinated garbage.
   * Whisper-tiny tends to output repetitive filler when confused.
   */
  _isLikelyHallucination(text) {
    if (!text || text.length < 10) return true;

    // Count unique words vs total
    const words = text.toLowerCase().split(/\s+/);
    if (words.length < 3) return false;

    const unique = new Set(words);
    const uniqueRatio = unique.size / words.length;

    // If less than 15% of words are unique, it's likely hallucination
    // e.g., "okay okay okay okay ..." has ~1/N unique ratio
    if (uniqueRatio < 0.15 && words.length > 10) return true;

    return false;
  }

  /**
   * Transcribe PCM audio with anti-hallucination measures.
   */
  async transcribe(pcmData, onProgress) {
    if (!this.pipeline) {
      throw new Error("Model not loaded. Call loadModel() first.");
    }

    const CHUNK_SECONDS = 30;
    const CHUNK_SAMPLES = CHUNK_SECONDS * 16000;
    const totalChunks = Math.ceil(pcmData.length / CHUNK_SAMPLES);
    const transcriptParts = [];
    let skippedSilent = 0;
    let skippedHallucination = 0;

    // RMS threshold — chunks below this are silence/noise
    // Typical speech RMS is 0.02-0.2; background noise is <0.005
    const SILENCE_THRESHOLD = 0.005;

    this.log(`Transcribing ${totalChunks} chunks (~30s each)...`);
    const etaLow = totalChunks * 3;
    const etaHigh = totalChunks * 10;
    const fmtTime = (s) => `${Math.floor(s / 60)}m ${s % 60}s`;
    this.log(`Estimated time: ${fmtTime(etaLow)} – ${fmtTime(etaHigh)}`);
    this.log("Anti-hallucination: silence detection + repetition filtering ON");

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SAMPLES;
      const end = Math.min(start + CHUNK_SAMPLES, pcmData.length);
      const chunk = pcmData.slice(start, end);

      // Skip very short chunks
      if (chunk.length < 1600) continue;

      // ── SILENCE DETECTION ──
      const rms = this._rms(chunk);
      if (rms < SILENCE_THRESHOLD) {
        skippedSilent++;
        // Still update progress
        const pct = (((i + 1) / totalChunks) * 100).toFixed(1);
        if (onProgress) onProgress(parseFloat(pct), i + 1, totalChunks);
        await new Promise((r) => setTimeout(r, 0));
        continue;
      }

      try {
        const result = await this.pipeline(chunk, {
          language: "en",
          task: "transcribe",
          return_timestamps: false,
        });

        if (result && result.text && result.text.trim()) {
          let text = result.text.trim();

          // ── REPETITION REMOVAL ──
          text = this._removeRepetitions(text);

          // ── HALLUCINATION CHECK ──
          if (this._isLikelyHallucination(text)) {
            skippedHallucination++;
          } else if (text.length > 0) {
            transcriptParts.push(text);
          }
        }
      } catch (err) {
        this.log(`⚠ Chunk ${i + 1} failed: ${err.message}`);
      }

      const pct = (((i + 1) / totalChunks) * 100).toFixed(1);
      if (onProgress) {
        onProgress(parseFloat(pct), i + 1, totalChunks);
      }

      if ((i + 1) % 10 === 0 || i === totalChunks - 1) {
        this.log(`Transcribed: ${i + 1}/${totalChunks} chunks (${pct}%)`);
      }

      // Yield to browser for UI updates
      await new Promise((r) => setTimeout(r, 0));
    }

    if (skippedSilent > 0) {
      this.log(`Skipped ${skippedSilent} silent chunks.`);
    }
    if (skippedHallucination > 0) {
      this.log(`Filtered out ${skippedHallucination} hallucinated chunks.`);
    }

    // ── FINAL CROSS-CHUNK DEDUPLICATION ──
    let fullText = transcriptParts.join(" ");
    fullText = this._removeRepetitions(fullText);

    return fullText;
  }
}
