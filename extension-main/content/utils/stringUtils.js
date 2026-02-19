// ============================================
// utils/stringUtils.js
// String manipulation and text-matching helpers
// ============================================

/**
 * Escape regex special characters
 */
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Tokenize title for comparison
 */
function tokenize(str, filterShort = true) {
  const stopWords = new Set([
    "implement",
    "find",
    "calculate",
    "check",
    "determine",
    "generate",
    "construct",
    "of",
    "the",
    "a",
    "an",
    "in",
    "on",
    "for",
    "to",
    "with",
    "from",
    "by",
    "maximum",
    "minimum",
    "longest",
    "shortest",
    "largest",
    "smallest",
    "problem",
    "solution",
    "function",
    "class",
    "method",
  ]);

  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => {
      if (!w) return false;
      if (stopWords.has(w)) return false;
      if (filterShort && w.length < 2) return false;
      return true;
    });
}

/**
 * Check if two titles are semantically similar
 */
function isTitleSimilar(t1, t2) {
  const tokens1 = tokenize(t1);
  const tokens2 = tokenize(t2);

  const set1 = tokens1.length > 0 ? tokens1 : tokenize(t1, false);
  const set2 = tokens2.length > 0 ? tokens2 : tokenize(t2, false);

  if (set1.length === 0 || set2.length === 0) return false;

  let matches = 0;
  const usedIndices = new Set();

  for (const w1 of set1) {
    for (let i = 0; i < set2.length; i++) {
      if (usedIndices.has(i)) continue;

      const w2 = set2[i];

      // 1. Exact Match
      if (w1 === w2) {
        matches++;
        usedIndices.add(i);
        break;
      }

      // 2. Prefix Match (Generalization for Power/Pow, Subsequence/Subseq)
      if (w1.length >= 3 && w2.length >= 3) {
        if (w1.startsWith(w2) || w2.startsWith(w1)) {
          matches++;
          usedIndices.add(i);
          break;
        }
      }
    }
  }

  // Overlap Thresholds
  const minLength = Math.min(set1.length, set2.length);

  if (minLength <= 2) return matches >= 1;
  if (minLength <= 4) return matches >= 2;

  return matches >= Math.ceil(minLength * 0.5);
}

/**
 * Normalize problem title for cache key
 */
function normalizeTitleForCache(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}
