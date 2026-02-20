// ============================================================
// background/leetcodeLink.js — LeetCode Problem Search
// ─────────────────────────────────────────────────────────────
// Loaded by background.js via importScripts().
// Handles the "searchLeetCodeProblem" message from content
// scripts by querying the LeetCode GraphQL API first, then
// falling back to a Google Search + verification step.
// ============================================================

const LEETCODE_GRAPHQL_URL = "https://leetcode.com/graphql";

// ─── Message Listener ────────────────────────────────────────

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "searchLeetCodeProblem") {
    handleSearch(request.title)
      .then((result) => sendResponse(result))
      .catch((error) => {
        console.error("[Scaler++ LeetCode] Search error:", error);
        sendResponse({ error: error.message });
      });
    return true; // keep message channel open for async response
  }
});

// ─── Orchestration ───────────────────────────────────────────

/**
 * Try GraphQL first (exact match), fall back to Google Search.
 * @param {string} title - Raw problem title from Scaler page
 */
async function handleSearch(title) {
  const cleanTitle = title.trim();

  // 1. LeetCode GraphQL — fast, exact/high-confidence
  try {
    const gqlResult = await checkLeetCodeGraphQL(cleanTitle);
    if (gqlResult.found) return gqlResult;
  } catch (e) {
    // Silent — fall through to Google
  }

  // 2. Google Search — semantic fallback
  return await checkGoogleSearch(cleanTitle);
}

// ─── LeetCode GraphQL ─────────────────────────────────────────

async function checkLeetCodeGraphQL(title) {
  const query = `
    query problemsetQuestionList($categorySlug: String, $limit: Int, $skip: Int, $filters: QuestionListFilterInput) {
      problemsetQuestionList: questionList(
        categorySlug: $categorySlug
        limit: $limit
        skip: $skip
        filters: $filters
      ) {
        questions: data {
          title
          titleSlug
        }
      }
    }
  `;

  const variables = {
    categorySlug: "",
    limit: 5,
    skip: 0,
    filters: { searchKeywords: title },
  };

  const response = await fetch(LEETCODE_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) return { found: false };

  const data = await response.json();
  const questions = data.data?.problemsetQuestionList?.questions || [];

  const target = title.toLowerCase().replace(/[^a-z0-9]/g, "");
  const match = questions.find((q) => {
    const qTitle = q.title.toLowerCase().replace(/[^a-z0-9]/g, "");
    return (
      qTitle === target ||
      (qTitle.includes(target) && Math.abs(qTitle.length - target.length) < 5)
    );
  });

  if (match) {
    return {
      found: true,
      url: `https://leetcode.com/problems/${match.titleSlug}/`,
      title: match.title,
    };
  }

  return { found: false };
}

// ─── Google Search Fallback ───────────────────────────────────

async function checkGoogleSearch(title) {
  const query = encodeURIComponent(`${title} site:leetcode.com/problems`);
  const searchUrl = `https://www.google.com/search?q=${query}`;

  try {
    const response = await fetch(searchUrl);
    if (!response.ok) throw new Error("Google Search Failed");

    const text = await response.text();
    const regex = /https:\/\/leetcode\.com\/problems\/([a-z0-9-]+)\//g;
    const match = regex.exec(text);

    if (match && match[0]) {
      const verified = await verifyProblemMatch(match[1], title);
      if (verified.valid) {
        return { found: true, url: match[0], title: verified.title };
      }
    }
  } catch (e) {
    // Silent catch
  }

  return { found: false, url: null };
}

// ─── Verification ─────────────────────────────────────────────

async function verifyProblemMatch(slug, userTitle) {
  const query = `
    query questionTitle($titleSlug: String!) {
      question(titleSlug: $titleSlug) {
        questionId
        title
      }
    }
  `;

  try {
    const response = await fetch(LEETCODE_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { titleSlug: slug } }),
    });

    const data = await response.json();
    const question = data.data?.question;

    if (question?.title && isTitleSimilar(userTitle, question.title)) {
      return { valid: true, title: question.title };
    }
  } catch (e) {}

  return { valid: false, title: null };
}

// ─── Title Similarity Helpers ─────────────────────────────────

/**
 * Returns true if two problem titles are semantically similar
 * using token overlap + generalized prefix matching.
 */
function isTitleSimilar(t1, t2) {
  const set1 = tokenize(t1) || tokenize(t1, false);
  const set2 = tokenize(t2) || tokenize(t2, false);

  if (set1.length === 0 || set2.length === 0) return false;

  let matches = 0;
  const usedIndices = new Set();

  for (const w1 of set1) {
    for (let i = 0; i < set2.length; i++) {
      if (usedIndices.has(i)) continue;
      const w2 = set2[i];

      // Exact match
      if (w1 === w2) {
        matches++;
        usedIndices.add(i);
        break;
      }

      // Prefix match (Power/Pow, Subsequence/Subseq, etc.)
      if (w1.length >= 3 && w2.length >= 3) {
        if (w1.startsWith(w2) || w2.startsWith(w1)) {
          matches++;
          usedIndices.add(i);
          break;
        }
      }
    }
  }

  const minLength = Math.min(set1.length, set2.length);
  if (minLength <= 2) return matches >= 1;
  if (minLength <= 4) return matches >= 2;
  return matches >= Math.ceil(minLength * 0.5);
}

/**
 * Tokenizes a title: lowercases, strips punctuation, removes stop words.
 * @param {string}  str
 * @param {boolean} filterShort - drop tokens shorter than 2 chars (default true)
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
