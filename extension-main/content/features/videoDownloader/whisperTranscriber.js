// ============================================================
// whisperTranscriber.js
// Uses Lemonfox API for transcription
// ============================================================

class WhisperTranscriber {
  constructor(logFn) {
    this.log = logFn || (() => {});
  }

  /**
   * Initialize transcriber. Checks if Lemonfox API is active.
   */
  async init() {
    this.log("Checking Lemonfox API availability...");
    try {
      const formData = new FormData();
      formData.append("model", "whisper-1");
      const res = await fetch(
        "https://api.lemonfox.ai/v1/audio/transcriptions",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer CMnBqrBbm2GdlE98IUSU3ZjUHUnYBsqX",
          },
          body: formData,
        },
      );

      // 400 Bad Request indicates API key is valid but file is missing (expected ping response)
      if (res.status !== 401 && res.status !== 403 && res.status < 500) {
        this.log(
          "✅ Lemonfox API is active. Will use remote API for fast transcription.",
        );
        return;
      }
    } catch (e) {
      this.log(`⚠ Lemonfox ping failed: ${e.message}`);
      throw new Error("Lemonfox API is unavailable");
    }
    throw new Error("Lemonfox API is unavailable");
  }

  // ── Anti-hallucination helpers ──

  _removeRepetitions(text) {
    if (!text || text.length < 20) return text;

    const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => s.trim());
    if (sentences.length < 3) return text;

    const cleaned = [sentences[0]];
    let repeatCount = 0;
    const MAX_REPEATS = 2;

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
    result = result.replace(/\b(\w+(?:\s+\w+){0,3})(?:\s+\1){2,}/gi, "$1");
    result = result.replace(/(\b\w+(?:\s+\w+){0,4},)(?:\s*\1){2,}/gi, "$1");

    return result.trim();
  }

  // ── Main Entry ──
  async transcribe(audioBuffer, onProgress) {
    return await this.transcribeRemote(audioBuffer, onProgress);
  }

  // ── Remote Transcription ── //
  async transcribeRemote(audioBuffer, onProgress) {
    this.log("Uploading chunks to Lemonfox Whisper API...");

    // Lemonfox standard file size limits (~20-25MB max per request)
    const CHUNK_SIZE = 20 * 1024 * 1024;
    const totalChunks = Math.ceil(audioBuffer.byteLength / CHUNK_SIZE);
    const transcriptParts = [];

    for (let i = 0; i < totalChunks; i++) {
      const start = i * CHUNK_SIZE;
      const end = Math.min(start + CHUNK_SIZE, audioBuffer.byteLength);
      const chunk = audioBuffer.slice(start, end);

      const blob = new Blob([chunk], { type: "audio/aac" });
      const file = new File([blob], `audio_chunk_${i}.aac`, {
        type: "audio/aac",
      });

      const formData = new FormData();
      formData.append("file", file);
      formData.append("model", "whisper-1");

      try {
        const response = await fetch(
          "https://api.lemonfox.ai/v1/audio/transcriptions",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer CMnBqrBbm2GdlE98IUSU3ZjUHUnYBsqX",
            },
            body: formData,
          },
        );

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(`API Error ${response.status}: ${errText}`);
        }

        const data = await response.json();
        if (data && data.text) {
          transcriptParts.push(data.text.trim());
        }
      } catch (err) {
        this.log(`⚠ Chunk ${i + 1} API failed: ${err.message}`);
      }

      const pct = (((i + 1) / totalChunks) * 100).toFixed(1);
      if (onProgress) {
        onProgress(parseFloat(pct), i + 1, totalChunks);
      }
      this.log(
        `Transcribed API Chunk: ${i + 1}/${totalChunks} chunks (${pct}%)`,
      );
    }

    let fullText = transcriptParts.join(" ");
    return this._removeRepetitions(fullText);
  }
}
