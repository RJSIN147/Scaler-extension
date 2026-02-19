// content.js - Extracts problem title from Scaler Academy

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getTitle') {
        const title = extractTitle();
        sendResponse({ title: title });
    }
    return true;
});

function extractTitle() {
    let rawTitle = null;

    // Strategy 1: Specific Class (Priority)
    const specificSelectors = [
        '.cr-p-heading__text',
        '.cr-p-heading_text',
        '[class*="heading__text"]',
        '[class*="heading_text"]'
    ];

    for (const sel of specificSelectors) {
        const el = document.querySelector(sel);
        if (el && el.innerText.trim()) {
            rawTitle = el.innerText;
            break;
        }
    }

    // Strategy 2: "Problem Description" Proximity
    if (!rawTitle) {
        try {
            const allElements = document.getElementsByTagName('*');
            let descriptionHeader = null;

            for (let el of allElements) {
                if (el.innerText === 'Problem Description') {
                    descriptionHeader = el;
                    break;
                }
            }

            if (descriptionHeader) {
                let parent = descriptionHeader.parentElement;
                let attempts = 0;
                while (parent && attempts < 8) {
                    const possibleTitle = parent.querySelector('h1, span[class*="heading"]');
                    if (possibleTitle && possibleTitle.innerText.length > 3) {
                        const txt = possibleTitle.innerText;
                        if (!txt.includes('Problem Description')) {
                            rawTitle = txt;
                            break;
                        }
                    }
                    parent = parent.parentElement;
                    attempts++;
                }
            }
        } catch (e) {
            // Silent catch
        }
    }

    // Strategy 3: H1
    if (!rawTitle) {
        const h1 = document.querySelector('h1');
        if (h1) {
            rawTitle = h1.innerText;
        }
    }

    // Strategy 4: Document Title Fallback
    if (!rawTitle) {
        if (document.title.includes('|')) {
            rawTitle = document.title.split('|')[0].trim();
        }
    }

    if (rawTitle) {
        // CLEANUP logic
        let clean = rawTitle
            .replace(/^Q\d+\.\s*/i, '') // Remove Q1.
            .replace(/<\/?>/g, '')      // Remove tags
            .replace(/\bSolved\b/gi, '')
            .replace(/\bUnsolved\b/gi, '')
            .replace(/\s-\sProblem$/i, '') // Remove " - Problem"
            .replace(/\sProblem$/i, '')
            .trim();

        clean = clean.split('\n')[0].trim();
        return clean;
    }

    return null;
}
