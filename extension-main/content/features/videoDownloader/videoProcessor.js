// ============================================================
// videoProcessor.js
// Concurrent HLS stream downloader with audio extraction
// ============================================================

const logsElem = document.getElementById("logs");
const statusText = document.getElementById("status-text");
const progressBar = document.getElementById("progress-bar");
const chunksText = document.getElementById("progress-chunks");
const percentText = document.getElementById("progress-percent");
const startBtn = document.getElementById("start-btn");

const CONCURRENCY = 6; // Number of parallel chunk fetches

function log(msg) {
  const p = document.createElement("div");
  p.innerText = `> ${msg}`;
  logsElem.appendChild(p);
  logsElem.scrollTop = logsElem.scrollHeight;
  console.log("[Scaler++ Downloader]", msg);
}

// ── Get params from URL ──
const urlParams = new URLSearchParams(window.location.search);
const m3u8Url = urlParams.get("url");
const downloadType = urlParams.get("type") || "video";

if (!m3u8Url) {
  log("Error: No M3U8 URL provided.");
  statusText.innerText = "Error: Invalid Stream Data";
  startBtn.disabled = true;
} else {
  log(`Mode: ${downloadType.toUpperCase()}`);
  log(`Stream: ${m3u8Url.substring(0, 60)}...`);
  if (downloadType === "audio") {
    log("Audio extraction enabled — will strip video tracks from chunks.");
  }
}

// ── Helpers ──

async function fetchText(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  return await res.text();
}

function resolveUrl(base, relative) {
  try {
    return new URL(relative, base).href;
  } catch (e) {
    return relative;
  }
}

// ── M3U8 Parsing ──

function getMediaPlaylistUrl(masterText, baseUrl) {
  const lines = masterText.split("\n").map((l) => l.trim());

  if (!lines[0].startsWith("#EXTM3U")) {
    throw new Error("Invalid M3U8 format");
  }

  // If it already has segments → it IS the media playlist
  if (lines.some((l) => l.startsWith("#EXTINF"))) {
    return baseUrl;
  }

  // ── Master playlist: find best stream ──

  // For AUDIO: try to find a dedicated audio-only rendition first
  if (downloadType === "audio") {
    for (const line of lines) {
      if (line.startsWith("#EXT-X-MEDIA") && line.includes("TYPE=AUDIO")) {
        const match = line.match(/URI="([^"]+)"/);
        if (match && match[1]) {
          log("Found dedicated audio rendition in master playlist.");
          return resolveUrl(baseUrl, match[1]);
        }
      }
    }
    log("No separate audio rendition found — will demux from video chunks.");
  }

  // Find highest bandwidth video stream
  let bestBandwidth = 0;
  let bestUrl = null;

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("#EXT-X-STREAM-INF")) {
      const bwMatch = lines[i].match(/BANDWIDTH=(\d+)/);
      if (bwMatch) {
        const bw = parseInt(bwMatch[1], 10);
        if (bw > bestBandwidth) {
          bestBandwidth = bw;
          for (let j = i + 1; j < lines.length; j++) {
            if (lines[j] && !lines[j].startsWith("#")) {
              bestUrl = lines[j];
              break;
            }
          }
        }
      }
    }
  }

  if (!bestUrl) {
    const fallback = lines.find((l) => l && !l.startsWith("#"));
    if (fallback) return resolveUrl(baseUrl, fallback);
    throw new Error("No media streams found in master playlist.");
  }

  return resolveUrl(baseUrl, bestUrl);
}

function extractSegments(mediaText, baseUrl) {
  const lines = mediaText.split("\n").map((l) => l.trim());
  const segments = [];

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].startsWith("#EXTINF")) {
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j] && !lines[j].startsWith("#")) {
          segments.push(resolveUrl(baseUrl, lines[j]));
          break;
        }
      }
    }
  }
  return segments;
}

// ── Fetch a single chunk with retries ──

async function fetchChunk(url, index) {
  const MAX_RETRIES = 3;
  for (let retry = 0; retry < MAX_RETRIES; retry++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return await res.arrayBuffer();
    } catch (e) {
      if (retry < MAX_RETRIES - 1) {
        await new Promise((r) => setTimeout(r, 1000 * (retry + 1)));
      }
    }
  }
  log(`⚠ Chunk ${index + 1} failed after ${MAX_RETRIES} retries. Skipping.`);
  return null;
}

// ── Concurrent Download Engine ──
//
// Uses a worker-pool pattern: N workers each grab the next available chunk,
// fetch it, optionally extract audio, and submit it to the ordered write queue.
// Chunks are written to disk sequentially even though they download in parallel.

async function downloadConcurrently(segments, writable, audioExtractor) {
  const total = segments.length;
  let nextToFetch = 0; // shared index for workers to claim chunks
  let nextToWrite = 0; // sequential write pointer
  const buffer = new Map(); // stores out-of-order completed chunks

  // Write queue ensures sequential, non-overlapping writes
  let writeChain = Promise.resolve();

  function updateUI(written) {
    const pct = ((written / total) * 100).toFixed(1);
    progressBar.style.width = pct + "%";
    chunksText.innerText = `${written} / ${total} chunks`;
    percentText.innerText = `${pct}%`;
  }

  function flushToFile() {
    writeChain = writeChain.then(async () => {
      while (buffer.has(nextToWrite)) {
        const data = buffer.get(nextToWrite);
        buffer.delete(nextToWrite);
        if (data && data.byteLength > 0) {
          await writable.write(data);
        }
        nextToWrite++;
        updateUI(nextToWrite);

        // Log progress milestones
        if (nextToWrite % 50 === 0) {
          log(`Progress: ${nextToWrite}/${total} chunks written to disk.`);
        }
      }
    });
    return writeChain;
  }

  // Each worker grabs the next unchlaimed chunk, downloads + processes it,
  // then triggers the sequential flush
  async function worker(workerId) {
    while (true) {
      const idx = nextToFetch++;
      if (idx >= total) break;

      const raw = await fetchChunk(segments[idx], idx);

      let processed;
      if (raw === null) {
        processed = new Uint8Array(0); // skip failed chunks
      } else if (audioExtractor) {
        // Extract only audio bytes from the .ts chunk
        processed = audioExtractor.extract(raw);
      } else {
        processed = new Uint8Array(raw);
      }

      buffer.set(idx, processed);
      flushToFile(); // don't await — let it queue up
    }
  }

  // Launch N parallel workers
  log(`Launching ${CONCURRENCY} parallel download workers...`);
  const workers = [];
  for (let i = 0; i < CONCURRENCY; i++) {
    workers.push(worker(i));
  }
  await Promise.all(workers);

  // Final flush for any remaining buffered chunks
  await flushToFile();
  await writeChain;

  log(`All ${total} chunks processed.`);
}

// ── Main Download Flow ──

startBtn.addEventListener("click", async () => {
  try {
    startBtn.disabled = true;
    statusText.innerText = "Analyzing stream...";

    // 1. Fetch and parse master M3U8
    log("Fetching stream manifest...");
    const masterText = await fetchText(m3u8Url);

    const mediaPlaylistUrl = getMediaPlaylistUrl(masterText, m3u8Url);
    log("Media playlist: " + mediaPlaylistUrl.substring(0, 60) + "...");

    // 2. Fetch media playlist and extract segment URLs
    const mediaText = await fetchText(mediaPlaylistUrl);
    const segments = extractSegments(mediaText, mediaPlaylistUrl);

    if (segments.length === 0) {
      throw new Error("0 segments found. Streaming format not supported.");
    }

    log(`Found ${segments.length} chunks to download.`);

    // 3. Ask user where to save
    const ext = downloadType === "audio" ? "aac" : "mp4";
    statusText.innerText = "Choose where to save the file...";

    let fileHandle;
    try {
      fileHandle = await window.showSaveFilePicker({
        suggestedName: `Scaler_Lecture.${ext}`,
        types: [
          {
            description: downloadType === "audio" ? "Audio File" : "Video File",
            accept:
              downloadType === "audio"
                ? { "audio/aac": [".aac", ".m4a"] }
                : { "video/mp4": [".mp4", ".ts"] },
          },
        ],
      });
    } catch (err) {
      log("File selection cancelled.");
      startBtn.disabled = false;
      statusText.innerText = "Ready to download.";
      return;
    }

    // 4. Open writable stream to disk
    const writable = await fileHandle.createWritable();

    // 5. Prepare audio extractor if needed
    let audioExtractor = null;
    if (downloadType === "audio") {
      audioExtractor = new TSAudioExtractor();
      log("Audio extractor initialized — stripping video from each chunk.");
    }

    // 6. Download concurrently!
    const startTime = Date.now();
    statusText.innerText = `Downloading ${downloadType} (${CONCURRENCY}x parallel)...`;

    await downloadConcurrently(segments, writable, audioExtractor);

    // 7. Finalize
    await writable.close();

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    log(`✅ Download finished in ${elapsed}s!`);
    statusText.innerText = `🎉 Download Complete! (${elapsed}s)`;
    progressBar.style.background = "#28a745";
  } catch (err) {
    log(`❌ Error: ${err.message}`);
    console.error(err);
    statusText.innerText = "Download Failed!";
    startBtn.disabled = false;
  }
});
