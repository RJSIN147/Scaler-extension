// background.js - Handles LeetCode API & Google Search

const LEETCODE_GRAPHQL_URL = 'https://leetcode.com/graphql';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'checkProblem') {
        handleSearch(request.title)
            .then(result => sendResponse(result))
            .catch(error => sendResponse({ error: error.message }));
        return true;
    }
});

async function handleSearch(title) {
    const cleanTitle = title.trim();

    // 1. Try LeetCode GraphQL (Exact/High Confidence)
    try {
        const gqlResult = await checkLeetCodeGraphQL(cleanTitle);
        if (gqlResult.found) {
            return gqlResult;
        }
    } catch (e) {
        // Silent catch
    }

    // 2. Fallback to Google Search (Semantic Match)
    return await checkGoogleSearch(cleanTitle);
}

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
        filters: { searchKeywords: title }
    };

    const response = await fetch(LEETCODE_GRAPHQL_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables })
    });

    if (!response.ok) return { found: false };

    const data = await response.json();
    const questions = data.data?.problemsetQuestionList?.questions || [];

    // Strict check for LeetCode internal search
    const target = title.toLowerCase().replace(/[^a-z0-9]/g, '');
    const match = questions.find(q => {
        const qTitle = q.title.toLowerCase().replace(/[^a-z0-9]/g, '');
        return qTitle === target || (qTitle.includes(target) && Math.abs(qTitle.length - target.length) < 5);
    });

    if (match) {
        return {
            found: true,
            url: `https://leetcode.com/problems/${match.titleSlug}/`,
            title: match.title
        };
    }

    return { found: false };
}

async function checkGoogleSearch(title) {
    const query = encodeURIComponent(`${title} site:leetcode.com/problems`);
    const searchUrl = `https://www.google.com/search?q=${query}`;

    try {
        const response = await fetch(searchUrl);
        if (!response.ok) throw new Error('Google Search Failed');

        const text = await response.text();

        // Find LeetCode problem URLs
        const regex = /https:\/\/leetcode\.com\/problems\/([a-z0-9-]+)\//g;
        let match = regex.exec(text);

        if (match && match[0]) {
            const url = match[0];
            const slug = match[1];

            // VERIFICATION STEP
            const verified = await verifyProblemMatch(slug, title);

            if (verified.valid) {
                return {
                    found: true,
                    url: url,
                    title: verified.title
                };
            }
        }
    } catch (e) {
        // Silent catch
    }

    return { found: false, url: null };
}

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
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables: { titleSlug: slug } })
        });

        const data = await response.json();
        const question = data.data?.question;

        if (question && question.title) {
            const leetCodeTitle = question.title;
            if (isTitleSimilar(userTitle, leetCodeTitle)) {
                return { valid: true, title: leetCodeTitle };
            }
        }
    } catch (e) { }

    return { valid: false, title: null };
}

/**
 * Returns true if titles are semantically similar (Generalized Prefix Logic).
 */
function isTitleSimilar(t1, t2) {
    const tokens1 = tokenize(t1);
    const tokens2 = tokenize(t2);

    // Filter out variables unless title is very short
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

    if (minLength <= 2) return matches >= 1; // "Pow (x, n)" -> 1 match enough
    if (minLength <= 4) return matches >= 2;

    return matches >= Math.ceil(minLength * 0.5);
}

function tokenize(str, filterShort = true) {
    const stopWords = new Set([
        'implement', 'find', 'calculate', 'check', 'determine', 'generate', 'construct',
        'of', 'the', 'a', 'an', 'in', 'on', 'for', 'to', 'with', 'from', 'by',
        'maximum', 'minimum', 'longest', 'shortest', 'largest', 'smallest',
        'problem', 'solution', 'function', 'class', 'method'
    ]);

    return str.toLowerCase()
        .replace(/[^a-z0-9\s]/g, ' ')
        .split(/\s+/)
        .filter(w => {
            if (!w) return false;
            if (stopWords.has(w)) return false;
            if (filterShort && w.length < 2) return false;
            return true;
        });
}
