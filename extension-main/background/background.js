// ============================================================
// background.js — Scaler++ Service Worker Entry Point
// ─────────────────────────────────────────────────────────────
// All feature logic lives in separate modules loaded below.
// importScripts() runs each file in the same global scope, so
// all their functions and listeners are immediately active.
// ============================================================

importScripts("./companionBypass.js"); // Smart Companion Mode Bypass
importScripts("./leetcodeLink.js"); // LeetCode Problem Search & Verification
