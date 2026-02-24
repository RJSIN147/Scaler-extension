// ============================================================
// background/googleCalendar.js — Google Calendar Sync
// ─────────────────────────────────────────────────────────────
// Loaded by background.js via importScripts().
// Handles OAuth 2.0 token acquisition and Google Calendar API
// calls to create class events from the Scaler dashboard.
// ============================================================

const GCAL_API_BASE = "https://www.googleapis.com/calendar/v3";

// ─── Message Listener ────────────────────────────────────────

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "syncToCalendar") {
        handleCalendarSync(request.classes)
            .then((result) => sendResponse(result))
            .catch((error) => {
                console.error("[Scaler++ Calendar] Sync error:", error);
                sendResponse({ error: error.message });
            });
        return true; // keep message channel open for async response
    }

    if (request.action === "revokeCalendarToken") {
        chrome.identity.getAuthToken({ interactive: false }, (token) => {
            if (token) {
                chrome.identity.removeCachedAuthToken({ token }, () => {
                    sendResponse({ success: true });
                });
            } else {
                sendResponse({ success: true });
            }
        });
        return true;
    }
});

// ─── Orchestration ───────────────────────────────────────────

/**
 * Sync an array of class objects to Google Calendar.
 * Each class: { title, date, startTime, endTime, link, type }
 *
 * @param {Array} classes - Array of class data objects
 * @returns {{ success: boolean, created: number, skipped: number, errors: number }}
 */
async function handleCalendarSync(classes) {
    if (!classes || classes.length === 0) {
        return { success: false, error: "No classes to sync" };
    }

    const token = await getAuthToken();
    if (!token) {
        return { success: false, error: "Authentication failed. Please try again." };
    }

    let created = 0;
    let skipped = 0;
    let errors = 0;

    for (const cls of classes) {
        try {
            const startDateTime = buildDateTime(cls.date, cls.startTime);
            const endDateTime = buildDateTime(cls.date, cls.endTime);

            if (!startDateTime || !endDateTime) {
                console.warn("[Scaler++ Calendar] Could not parse time for:", cls.title);
                errors++;
                continue;
            }

            // Check for existing duplicate
            const isDuplicate = await checkDuplicate(token, cls.title, startDateTime, endDateTime);
            if (isDuplicate) {
                console.log("[Scaler++ Calendar] Skipping duplicate:", cls.title);
                skipped++;
                continue;
            }

            // Create event
            await createEvent(token, {
                summary: cls.title,
                description: `Scaler Academy ${cls.type || "Class"}\n\nJoin: https://www.scaler.com${cls.link}`,
                location: "Scaler Academy (Online)",
                start: { dateTime: startDateTime, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone },
                end: { dateTime: endDateTime, timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone },
                reminders: {
                    useDefault: false,
                    overrides: [
                        { method: "popup", minutes: 10 },
                    ],
                },
            });

            console.log("[Scaler++ Calendar] Created event:", cls.title);
            created++;
        } catch (e) {
            console.error("[Scaler++ Calendar] Error creating event for:", cls.title, e);
            // If token expired, try refreshing once
            if (e.message && e.message.includes("401")) {
                chrome.identity.removeCachedAuthToken({ token });
                return { success: false, error: "Auth token expired. Please try syncing again." };
            }
            errors++;
        }
    }

    return { success: true, created, skipped, errors };
}

// ─── Auth ────────────────────────────────────────────────────

/**
 * Get OAuth2 token via chrome.identity.
 * @returns {Promise<string|null>} Access token or null
 */
function getAuthToken() {
    return new Promise((resolve) => {
        chrome.identity.getAuthToken({ interactive: true }, (token) => {
            if (chrome.runtime.lastError) {
                console.error("[Scaler++ Calendar] Auth error:", chrome.runtime.lastError.message);
                resolve(null);
            } else {
                resolve(token);
            }
        });
    });
}

// ─── Calendar API ────────────────────────────────────────────

/**
 * Create a calendar event.
 * @param {string} token - OAuth access token
 * @param {object} event - Google Calendar event resource
 */
async function createEvent(token, event) {
    const response = await fetch(`${GCAL_API_BASE}/calendars/primary/events`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Calendar API error ${response.status}: ${errorText}`);
    }

    return await response.json();
}

/**
 * Check if a duplicate event already exists.
 * Queries events with the same title in the same time window.
 *
 * @param {string} token
 * @param {string} title
 * @param {string} startDateTime - ISO 8601
 * @param {string} endDateTime   - ISO 8601
 * @returns {Promise<boolean>}
 */
async function checkDuplicate(token, title, startDateTime, endDateTime) {
    const params = new URLSearchParams({
        timeMin: startDateTime,
        timeMax: endDateTime,
        q: title,
        singleEvents: "true",
        maxResults: "5",
    });

    try {
        const response = await fetch(
            `${GCAL_API_BASE}/calendars/primary/events?${params.toString()}`,
            {
                headers: { Authorization: `Bearer ${token}` },
            },
        );

        if (!response.ok) return false;

        const data = await response.json();
        const items = data.items || [];

        // Check for exact title match within the time window
        return items.some((item) => {
            const itemTitle = (item.summary || "").toLowerCase().trim();
            return itemTitle === title.toLowerCase().trim();
        });
    } catch (e) {
        console.warn("[Scaler++ Calendar] Duplicate check failed:", e);
        return false; // proceed with creation if check fails
    }
}

// ─── Helpers ─────────────────────────────────────────────────

/**
 * Build an ISO 8601 datetime string from a date string and a 12-hour time string.
 *
 * @param {string} dateStr   - e.g. "2026-02-24" (ISO date)
 * @param {string} timeStr   - e.g. "02:30 PM"
 * @returns {string|null}    - ISO 8601 datetime or null
 */
function buildDateTime(dateStr, timeStr) {
    if (!dateStr || !timeStr) return null;

    const match = timeStr.trim().match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
    if (!match) return null;

    let hours = parseInt(match[1], 10);
    const minutes = parseInt(match[2], 10);
    const meridiem = match[3].toUpperCase();

    if (meridiem === "AM") {
        if (hours === 12) hours = 0;
    } else {
        if (hours !== 12) hours += 12;
    }

    const hh = String(hours).padStart(2, "0");
    const mm = String(minutes).padStart(2, "0");

    // Get timezone offset for proper ISO string
    const now = new Date();
    const offsetMin = now.getTimezoneOffset();
    const sign = offsetMin <= 0 ? "+" : "-";
    const absOffset = Math.abs(offsetMin);
    const offH = String(Math.floor(absOffset / 60)).padStart(2, "0");
    const offM = String(absOffset % 60).padStart(2, "0");

    return `${dateStr}T${hh}:${mm}:00${sign}${offH}:${offM}`;
}
