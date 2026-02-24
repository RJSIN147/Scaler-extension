// ============================================
// features/googleCalendarSync.js
// Scrapes class data from the mentee-dashboard
// and provides a "Sync to Google Calendar" button
// that syncs ALL visible date tabs' classes.
// ============================================

/**
 * Parse a date tab element text (e.g. "24 Feb") into an ISO date string "YYYY-MM-DD".
 *
 * @param {string} text - e.g. "24 Feb"
 * @returns {string|null} - e.g. "2026-02-24" or null
 */
function parseTabDateToISO(text) {
    if (!text) return null;

    const match = text.trim().match(/^(\d{1,2})\s+([A-Za-z]+)$/);
    if (!match) return null;

    const day = parseInt(match[1], 10);
    const monthStr = match[2];

    const MONTHS = [
        "jan", "feb", "mar", "apr", "may", "jun",
        "jul", "aug", "sep", "oct", "nov", "dec",
    ];
    const monthIndex = MONTHS.findIndex((m) =>
        monthStr.toLowerCase().startsWith(m),
    );
    if (monthIndex === -1) return null;

    const today = new Date();
    let year = today.getFullYear();
    const candidate = new Date(year, monthIndex, day);
    if (today - candidate > 60 * 24 * 60 * 60 * 1000) {
        year += 1;
    }

    const mm = String(monthIndex + 1).padStart(2, "0");
    const dd = String(day).padStart(2, "0");
    return `${year}-${mm}-${dd}`;
}

/**
 * Extract class data from a single classroom card element.
 *
 * @param {Element} card - The `a.me-cr-classroom-url` element
 * @param {string} dateISO - The ISO date for this card (from its tab)
 * @returns {object|null} - { title, date, startTime, endTime, link, type }
 */
function extractClassData(card, dateISO) {
    // Title
    const titleEl = card.querySelector("p.A5n8g0uf9DprHw5f_gwFE");
    const title = titleEl ? titleEl.textContent.trim() : null;
    if (!title) return null;

    // Time
    const timeWrapper = card.querySelector("._1EQZYaGMSYVhKTiIKY-qXP > div");
    if (!timeWrapper) return null;

    const spans = Array.from(timeWrapper.querySelectorAll("span")).filter(
        (s) => !s.classList.contains("m-l-5") && !s.classList.contains("m-r-5"),
    );
    if (spans.length < 2) return null;

    const startTime = spans[0].textContent.trim();
    const endTime = spans[1].textContent.trim();

    // Type (e.g. "Live Class")
    const typeEl = card.querySelector("._2GsNsJLDK4elcdmjka5HmF");
    const type = typeEl ? typeEl.textContent.trim() : "Class";

    // Link
    const link = card.getAttribute("href") || "";

    return { title, date: dateISO, startTime, endTime, link, type };
}

/**
 * Scrape ALL classes from ALL visible date tabs on the dashboard.
 * Clicks through each tab, collects cards, then restores the original tab.
 *
 * @returns {Array} - Array of class data objects
 */
function scrapeAllVisibleClasses() {
    const classes = [];
    const tabs = document.querySelectorAll(".tabs__tab");

    if (tabs.length === 0) {
        // Fallback: just scrape current view
        const activeDate = getActiveDashboardDateISO();
        if (!activeDate) return classes;

        const cards = document.querySelectorAll(
            'a.me-cr-classroom-url[data-cy="classroom-link"]',
        );
        cards.forEach((card) => {
            const data = extractClassData(card, activeDate);
            if (data) classes.push(data);
        });
        return classes;
    }

    // Find the currently active tab index
    let activeIndex = -1;
    tabs.forEach((tab, i) => {
        if (tab.classList.contains("tabs__tab--active")) {
            activeIndex = i;
        }
    });

    // For each tab, click it, wait briefly, then scrape
    // We do this synchronously since we need DOM updates
    tabs.forEach((tab) => {
        const dateISO = parseTabDateToISO(tab.textContent);
        if (!dateISO) return;

        // Click the tab to load its classes
        tab.click();

        // Scrape cards currently visible
        const cards = document.querySelectorAll(
            'a.me-cr-classroom-url[data-cy="classroom-link"]',
        );
        cards.forEach((card) => {
            const data = extractClassData(card, dateISO);
            if (data) classes.push(data);
        });
    });

    // Restore the originally active tab
    if (activeIndex >= 0 && tabs[activeIndex]) {
        tabs[activeIndex].click();
    }

    return classes;
}

/**
 * Async version that clicks tabs with delays to allow DOM to update.
 * @returns {Promise<Array>}
 */
async function scrapeAllVisibleClassesAsync() {
    const classes = [];
    const tabs = Array.from(document.querySelectorAll(".tabs__tab"));

    if (tabs.length === 0) {
        const activeDate = getActiveDashboardDateISO();
        if (!activeDate) return classes;

        const cards = document.querySelectorAll(
            'a.me-cr-classroom-url[data-cy="classroom-link"]',
        );
        cards.forEach((card) => {
            const data = extractClassData(card, activeDate);
            if (data) classes.push(data);
        });
        return classes;
    }

    // Remember active tab
    let activeIndex = tabs.findIndex((t) =>
        t.classList.contains("tabs__tab--active"),
    );

    for (const tab of tabs) {
        const dateISO = parseTabDateToISO(tab.textContent);
        if (!dateISO) continue;

        tab.click();
        // Wait for DOM to update after tab click
        await new Promise((r) => setTimeout(r, 300));

        const cards = document.querySelectorAll(
            'a.me-cr-classroom-url[data-cy="classroom-link"]',
        );
        cards.forEach((card) => {
            const data = extractClassData(card, dateISO);
            if (data) classes.push(data);
        });
    }

    // Restore original tab
    if (activeIndex >= 0 && tabs[activeIndex]) {
        tabs[activeIndex].click();
    }

    return classes;
}

/**
 * Get the active tab's date as ISO string.
 * @returns {string|null} e.g. "2026-02-24"
 */
function getActiveDashboardDateISO() {
    const activeTab = document.querySelector(".tabs__tab--active");
    if (!activeTab) return null;
    return parseTabDateToISO(activeTab.textContent);
}

// ─── UI: Sync Button ─────────────────────────────────────────

let _calSyncBtnInjected = false;

/**
 * Inject the "📅 Sync to Calendar" button on the dashboard.
 */
function injectCalendarSyncButton() {
    if (_calSyncBtnInjected && document.querySelector(".scaler-cal-sync-btn")) {
        return;
    }

    // Find the tabs header to place the button near it
    const tabsHeader = document.querySelector(".tabs__header");
    if (!tabsHeader) return;

    // Check if button already exists
    if (document.querySelector(".scaler-cal-sync-container")) return;

    // Create container
    const container = document.createElement("div");
    container.className = "scaler-cal-sync-container";

    // Create button
    const btn = document.createElement("button");
    btn.className = "scaler-cal-sync-btn";
    btn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:6px;vertical-align:middle">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
    <span>Sync to Google Calendar</span>
  `;
    btn.title = "Sync all visible classes to your Google Calendar";

    // Status text
    const status = document.createElement("span");
    status.className = "scaler-cal-sync-status";
    status.textContent = "";

    btn.addEventListener("click", async (e) => {
        e.preventDefault();
        e.stopPropagation();
        await handleSyncClick(btn, status);
    });

    container.appendChild(btn);
    container.appendChild(status);

    // Insert after the tabs header
    tabsHeader.parentNode.insertBefore(container, tabsHeader.nextSibling);
    _calSyncBtnInjected = true;

    // Inject styles
    injectCalendarSyncStyles();
}

/**
 * Handle the sync button click.
 */
async function handleSyncClick(btn, status) {
    // Disable button and show loading
    btn.disabled = true;
    btn.classList.add("scaler-cal-sync-btn--loading");
    const originalHTML = btn.innerHTML;
    btn.innerHTML = `
    <svg class="scaler-cal-sync-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" style="margin-right:6px;vertical-align:middle">
      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
    </svg>
    <span>Syncing...</span>
  `;
    status.textContent = "";
    status.className = "scaler-cal-sync-status";

    try {
        // Scrape classes from all tabs
        const classes = await scrapeAllVisibleClassesAsync();

        if (classes.length === 0) {
            status.textContent = "⚠️ No classes found on the dashboard";
            status.classList.add("scaler-cal-sync-status--warning");
            return;
        }

        // Send to background for Calendar API calls
        const result = await new Promise((resolve) => {
            chrome.runtime.sendMessage(
                { action: "syncToCalendar", classes },
                (response) => {
                    if (chrome.runtime.lastError) {
                        resolve({ error: chrome.runtime.lastError.message });
                    } else {
                        resolve(response);
                    }
                },
            );
        });

        if (result.error) {
            status.textContent = `❌ ${result.error}`;
            status.classList.add("scaler-cal-sync-status--error");
        } else {
            const parts = [];
            if (result.created > 0) parts.push(`${result.created} added`);
            if (result.skipped > 0) parts.push(`${result.skipped} already synced`);
            if (result.errors > 0) parts.push(`${result.errors} failed`);

            status.textContent = `✅ ${parts.join(", ")}`;
            status.classList.add("scaler-cal-sync-status--success");
        }
    } catch (error) {
        console.error("[Scaler++ Calendar] Sync error:", error);
        status.textContent = "❌ Sync failed. Check console for details.";
        status.classList.add("scaler-cal-sync-status--error");
    } finally {
        // Restore button
        btn.disabled = false;
        btn.classList.remove("scaler-cal-sync-btn--loading");
        btn.innerHTML = originalHTML;

        // Auto-clear status after 8 seconds
        setTimeout(() => {
            status.textContent = "";
            status.className = "scaler-cal-sync-status";
        }, 8000);
    }
}

/**
 * Inject CSS styles for the sync button and status.
 */
function injectCalendarSyncStyles() {
    if (document.getElementById("scaler-cal-sync-styles")) return;

    const style = document.createElement("style");
    style.id = "scaler-cal-sync-styles";
    style.textContent = `
    .scaler-cal-sync-container {
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 12px 0 8px 0;
      padding: 0 4px;
    }

    .scaler-cal-sync-btn {
      display: inline-flex;
      align-items: center;
      padding: 8px 18px;
      border: none;
      border-radius: 8px;
      background: linear-gradient(135deg, #4285f4, #34a853);
      color: #fff;
      font-size: 13px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: all 0.25s ease;
      box-shadow: 0 2px 8px rgba(66, 133, 244, 0.25);
      white-space: nowrap;
    }

    .scaler-cal-sync-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      box-shadow: 0 4px 14px rgba(66, 133, 244, 0.35);
      background: linear-gradient(135deg, #3b78e7, #2d9348);
    }

    .scaler-cal-sync-btn:active:not(:disabled) {
      transform: translateY(0);
    }

    .scaler-cal-sync-btn:disabled {
      opacity: 0.85;
      cursor: not-allowed;
    }

    .scaler-cal-sync-btn--loading {
      background: linear-gradient(135deg, #5a95f5, #4db860);
    }

    @keyframes scaler-cal-spin {
      to { transform: rotate(360deg); }
    }

    .scaler-cal-sync-spinner {
      animation: scaler-cal-spin 0.8s linear infinite;
    }

    .scaler-cal-sync-status {
      font-size: 12px;
      font-weight: 500;
      transition: opacity 0.3s ease;
      min-height: 18px;
    }

    .scaler-cal-sync-status--success {
      color: #34a853;
    }

    .scaler-cal-sync-status--error {
      color: #ea4335;
    }

    .scaler-cal-sync-status--warning {
      color: #fbbc04;
    }
  `;

    document.head.appendChild(style);
}

/**
 * Remove the sync button from the DOM.
 */
function removeCalendarSyncButton() {
    const container = document.querySelector(".scaler-cal-sync-container");
    if (container) container.remove();

    const styles = document.getElementById("scaler-cal-sync-styles");
    if (styles) styles.remove();

    _calSyncBtnInjected = false;
}

// ─── Entry Point ─────────────────────────────────────────────

/**
 * Initialize Google Calendar Sync — only on mentee dashboard.
 */
function initGoogleCalendarSync() {
    if (!location.href.includes("mentee-dashboard")) return;
    if (currentSettings["google-calendar-sync"] === false) return;

    injectCalendarSyncButton();
}
