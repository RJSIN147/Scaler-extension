// ============================================
// Scaler++ - Enhanced SPA Support
// With User Configurable Settings (Hide/Show)
// ============================================

// Unique attribute to mark elements we've processed
const CLEANER_ATTR = "data-scaler-cleaner";
const HIDDEN_CLASS = "scaler-cleaner-hidden";

// Default settings - all enabled by default (true = hide element)
const DEFAULT_SETTINGS = {
  // Todos Page
  "2025-revisited": true,
  "referral-stats": true,
  "mess-fee": true,
  "refer-earn": true,
  "scaler-coins": true,
  "continue-watching": true,
  "referral-banner": true,

  // Global
  "notebook-widget": true,
  "referral-popup": true,
  "auto-close-modals": true,

  // Sidebar
  "sst-goodies": true,
  "refer-friends": true,
  "sidebar-refer-banner": true,

  // Enhancements (true = show the feature)
  "core-curriculum": true,
  "problem-search": true,
  "leetcode-link": true,
  "practice-mode": false,
  "practice-mode-days": 7,
  "practice-mode-start": null,
};

// Current settings (loaded from storage)
let currentSettings = { ...DEFAULT_SETTINGS };

// Elements config for /academy/mentee-dashboard/todos page
const TODOS_PAGE_SELECTORS = [
  {
    key: "2025-revisited",
    selector: "a._3l2QS_TrEOIiff69Oqtw-",
    verify: (el) =>
      el.textContent.includes("2025") && el.textContent.includes("Revisited"),
  },
  {
    key: "referral-stats",
    selector: "div.referral-live-counter__container",
    verify: (el) =>
      el
        .querySelector(".referral-live-counter__title")
        ?.textContent.includes("Referral Stats"),
  },
  {
    key: "mess-fee",
    selector: "a.mentee-card",
    verify: (el) => {
      const isMessFee = el.textContent.includes("Mess Fee");
      if (!isMessFee) return false;
      const today = new Date();
      const lastDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0,
      ).getDate();
      const dayOfMonth = today.getDate();
      const isLast10Days = dayOfMonth > lastDayOfMonth - 10;
      return !isLast10Days;
    },
  },
  {
    key: "continue-watching",
    selector: "div.section.continue-watch",
    verify: (el) =>
      el
        .querySelector(".section-header__title")
        ?.textContent.includes("Continue Watching"),
  },
  {
    key: "referral-banner",
    selector: "div.ug-referral-banner-sst",
    verify: (el) =>
      el.textContent.includes("Referral") && el.textContent.includes("Rewards"),
  },
];

// Global elements on ALL scaler.com pages (header elements, popups, etc.)
const GLOBAL_SELECTORS = [
  {
    key: "refer-earn",
    selector: "a.refer-and-earn-nudge-sst",
    verify: (el) =>
      el.textContent.includes("Refer") && el.textContent.includes("Earn"),
  },
  {
    key: "scaler-coins",
    selector: 'a.mentee-header__stats[href="/store"]',
    verify: (el) => el.querySelector('img[alt="scaler coin"]') !== null,
  },
  {
    key: "notebook-widget",
    selector: "a",
    verify: (el) =>
      el.querySelector('img[alt="widget-icon"][src*="notebook-widget"]') !==
      null,
  },
  {
    key: "referral-popup",
    selector: "div.ug-referral-popup-modal",
    verify: (el) => true, // Always match this modal
  },
  {
    key: "referral-popup",
    selector: "div.ug-referral-popup-modal__backdrop",
    verify: (el) => true, // Also hide the backdrop
  },
];

// Sidebar elements
const SIDEBAR_SELECTORS = [
  {
    key: "sst-goodies",
    selector: 'a[href="/academy/store"]',
    verify: (el) => el.textContent.includes("SST Goodies"),
  },
  {
    key: "refer-friends",
    selector: "a.me-sidebar-refer-and-earn-sst__nav",
    verify: (el) => el.textContent.includes("Refer Friends"),
  },
  {
    key: "sidebar-refer-banner",
    selector: "div.me-sidebar-refer-and-earn-sst",
    verify: (el) => el.getAttribute("role") === "presentation",
  },
];

// All selectors combined for easy iteration
const ALL_SELECTORS = [
  ...TODOS_PAGE_SELECTORS,
  ...GLOBAL_SELECTORS,
  ...SIDEBAR_SELECTORS,
];

/**
 * Check if the extension context is still valid
 */
function isExtensionValid() {
  return (
    typeof chrome !== "undefined" && !!chrome.runtime && !!chrome.runtime.id
  );
}

let lastUrl = location.href;
let sidebarObserverSetup = false;
let styleInjected = false;
let modalObserverSetup = false;

/**
 * Inject CSS for hiding elements
 */
function injectStyles() {
  if (styleInjected) return;

  const style = document.createElement("style");
  style.id = "scaler-cleaner-styles";
  style.textContent = `
    .${HIDDEN_CLASS} {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
  styleInjected = true;
}

/**
 * Load settings from Chrome storage
 */
async function loadSettings() {
  if (!isExtensionValid()) return;
  try {
    const result = await chrome.storage.sync.get("cleanerSettings");
    if (result.cleanerSettings) {
      currentSettings = { ...DEFAULT_SETTINGS, ...result.cleanerSettings };
    }
  } catch (error) {
    // Silently ignore context invalidated error - it's expected when extension updates
    if (error.message && error.message.includes("context invalidated")) {
      return;
    }
    console.error("[Scaler DOM Cleaner] Error loading settings:", error);
    currentSettings = { ...DEFAULT_SETTINGS };
  }
}

/**
 * Check if a feature should hide elements (enabled = hide)
 */
function shouldHide(key) {
  return currentSettings[key] !== false;
}

/**
 * Check if current page is the todos page
 */
function isTodosPage() {
  return location.pathname.includes("/academy/mentee-dashboard/todos");
}

/**
 * Process elements - hide or show based on settings
 */
function processElementsByConfig(configs) {
  configs.forEach((config) => {
    const elements = document.querySelectorAll(config.selector);
    elements.forEach((element) => {
      if (config.verify(element)) {
        // Mark the element with our attribute for tracking
        element.setAttribute(CLEANER_ATTR, config.key);

        // Hide or show based on current setting
        if (shouldHide(config.key)) {
          element.classList.add(HIDDEN_CLASS);
        } else {
          element.classList.remove(HIDDEN_CLASS);
        }
      }
    });
  });
}

/**
 * Update visibility for a specific key
 */
function updateVisibilityForKey(key, hide) {
  // First, try to find already marked elements
  let elements = document.querySelectorAll(`[${CLEANER_ATTR}="${key}"]`);

  // If no marked elements found, try to find and mark them now
  if (elements.length === 0) {
    const allConfigs = [
      ...TODOS_PAGE_SELECTORS,
      ...GLOBAL_SELECTORS,
      ...SIDEBAR_SELECTORS,
    ];
    const configs = allConfigs.filter((c) => c.key === key);
    configs.forEach((config) => {
      const potentialElements = document.querySelectorAll(config.selector);
      potentialElements.forEach((el) => {
        if (config.verify(el)) {
          el.setAttribute(CLEANER_ATTR, key);
        }
      });
    });
    elements = document.querySelectorAll(`[${CLEANER_ATTR}="${key}"]`);
  }

  elements.forEach((el) => {
    if (hide) {
      el.classList.add(HIDDEN_CLASS);
    } else {
      el.classList.remove(HIDDEN_CLASS);
    }
  });

  // Special handling for auto-close modals
  if (key === "auto-close-modals") {
    if (hide) {
      autoCloseReferralModals();
    }
  }
}

/**
 * Handle core curriculum link visibility (enhancement - different logic)
 */
function handleCoreCurriculumVisibility() {
  const curriculumLinks = document.querySelectorAll(
    `[${CLEANER_ATTR}="core-curriculum"]`,
  );
  const shouldShow = shouldHide("core-curriculum"); // For enhancements, "enabled" means show

  curriculumLinks.forEach((el) => {
    if (shouldShow) {
      el.classList.remove(HIDDEN_CLASS);
    } else {
      el.classList.add(HIDDEN_CLASS);
    }
  });
}

/**
 * Apply all settings - update visibility for all tracked elements
 */
function applyAllSettings() {
  // Re-process all elements to find any new ones
  if (isTodosPage()) {
    processElementsByConfig(TODOS_PAGE_SELECTORS);
  }
  processElementsByConfig(GLOBAL_SELECTORS);
  processElementsByConfig(SIDEBAR_SELECTORS);

  // Handle core curriculum links
  handleCoreCurriculumVisibility();

  // Handle referral popup
  hideReferralPopup();

  // Auto close modals if enabled
  if (shouldHide("auto-close-modals")) {
    autoCloseReferralModals();
  }
}

/**
 * Hide referral popup modal
 */
function hideReferralPopup() {
  if (!shouldHide("referral-popup")) return;

  // Hide the main popup modal
  const popup = document.querySelector("div.ug-referral-popup-modal");
  if (popup) {
    popup.setAttribute(CLEANER_ATTR, "referral-popup");
    popup.classList.add(HIDDEN_CLASS);
  }

  // Hide the backdrop (find the one specifically for referral popup)
  const backdrops = document.querySelectorAll(
    "div.sr-backdrop.ug-referral-popup-modal__backdrop",
  );
  backdrops.forEach((backdrop) => {
    backdrop.setAttribute(CLEANER_ATTR, "referral-popup");
    backdrop.classList.add(HIDDEN_CLASS);
  });
}

/**
 * Auto-close referral modals by clicking the close button
 */
function autoCloseReferralModals() {
  if (!shouldHide("auto-close-modals")) return;

  // Find and click close button on referral popup
  const referralPopup = document.querySelector("div.ug-referral-popup-modal");
  if (referralPopup && !referralPopup.classList.contains(HIDDEN_CLASS)) {
    const closeBtn = referralPopup.querySelector("a.sr-modal__close-alt");
    if (closeBtn) {
      closeBtn.click();
      // console.log('[Scaler DOM Cleaner] Auto-closed referral popup');
    }
  }

  // Also try to close any other referral-related modals
  const modals = document.querySelectorAll("div.sr-modal");
  modals.forEach((modal) => {
    // Check if it's a referral-related modal
    const isReferralModal =
      modal.classList.contains("ug-referral-popup-modal") ||
      modal.textContent.includes("Referral") ||
      modal.textContent.includes("Refer") ||
      modal.textContent.includes("NSET registration");

    if (isReferralModal) {
      const closeBtn = modal.querySelector(
        "a.sr-modal__close-alt, a.sr-modal__close, div.sr-modal__close",
      );
      if (closeBtn) {
        closeBtn.click();
        // console.log('[Scaler DOM Cleaner] Auto-closed modal');
      }
    }
  });
}

/**
 * Setup observer to watch for new modals appearing
 */
function setupModalObserver() {
  if (modalObserverSetup) return;

  const observer = new MutationObserver((mutations) => {
    let shouldCheck = false;

    mutations.forEach((mutation) => {
      // Check for added nodes that might be modals
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (
            node.classList?.contains("sr-modal") ||
            node.classList?.contains("sr-backdrop") ||
            node.querySelector?.(".sr-modal")
          ) {
            shouldCheck = true;
          }
        }
      });

      // Check for class changes on modals (visibility changes)
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "class"
      ) {
        const target = mutation.target;
        if (
          target.classList?.contains("sr-modal") ||
          target.classList?.contains("ug-referral-popup-modal")
        ) {
          shouldCheck = true;
        }
      }
    });

    if (shouldCheck) {
      // Small delay to let modal fully render
      setTimeout(() => {
        hideReferralPopup();
        if (shouldHide("auto-close-modals")) {
          autoCloseReferralModals();
        }
      }, 100);
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class", "style"],
  });

  modalObserverSetup = true;
  // console.log('[Scaler DOM Cleaner] Modal observer setup complete');
}

/**
 * Add Core-Curriculum link to the h2 element
 */
function addCoreCurriculumLink() {
  const h2 = document.querySelector(".section-header__title");
  if (!h2) return;

  // Skip if already has the link
  if (h2.querySelector('a[href*="core-curriculum"]')) return;

  const anchor = document.createElement("a");
  anchor.href =
    "https://www.scaler.com/academy/mentee-dashboard/core-curriculum/m/";
  anchor.textContent = "Core-Curriculum";
  anchor.style.marginLeft = "10px";
  anchor.style.color = "#5865F2";
  anchor.style.textDecoration = "none";
  anchor.style.fontSize = "0.8em";
  anchor.style.fontWeight = "normal";
  anchor.setAttribute(CLEANER_ATTR, "core-curriculum");

  // Apply visibility based on settings
  if (!shouldHide("core-curriculum")) {
    anchor.classList.add(HIDDEN_CLASS);
  }

  h2.appendChild(anchor);
}

/**
 * Helper function to get element by XPath
 */
function getElementByXPath(xpath) {
  return document.evaluate(
    xpath,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null,
  ).singleNodeValue;
}

/**
 * Add Core-Curriculum icon link to the header container
 */
function addCoreCurriculumIconLink() {
  let container = document.querySelector(".e7ge61UPj54Me37pqU2Rd");

  if (container) {
    appendCurriculumIcon(container);
  } else {
    setTimeout(() => {
      const containerXPath =
        "/html/body/div[3]/div/div[1]/div/div[1]/div/div[2]/div/div[1]";
      const xpathContainer = getElementByXPath(containerXPath);
      if (xpathContainer) {
        appendCurriculumIcon(xpathContainer);
      }
    }, 2000);
  }
}

/**
 * Helper function to append the curriculum icon to a container
 */
function appendCurriculumIcon(container) {
  if (container.querySelector('a[href*="core-curriculum"]')) return;

  const anchor = document.createElement("a");
  anchor.href =
    "https://www.scaler.com/academy/mentee-dashboard/core-curriculum/m/";
  anchor.className = "tappable";
  anchor.style.display = "inline-flex";
  anchor.style.alignItems = "center";
  anchor.style.marginLeft = "10px";
  anchor.title = "Core Curriculum";
  anchor.setAttribute(CLEANER_ATTR, "core-curriculum");

  // Apply visibility based on settings
  if (!shouldHide("core-curriculum")) {
    anchor.classList.add(HIDDEN_CLASS);
  }

  const icon = document.createElement("i");
  icon.className = "icon-curriculum-outlined sidebar__item-icon";
  anchor.appendChild(icon);
  container.appendChild(anchor);
}

/**
 * Main cleanup function - runs on todos page
 */
function cleanupTodosPage() {
  if (!isTodosPage()) return;
  processElementsByConfig(TODOS_PAGE_SELECTORS);
  addCoreCurriculumLink(); // This adds curriculum link to the sidebar H2 (todos page only)
}

/**
 * Global cleanup - runs on all pages
 */
function cleanupGlobal() {
  processElementsByConfig(GLOBAL_SELECTORS);
  hideReferralPopup();

  // Add Core Curriculum icon to header (on all pages)
  addCoreCurriculumIconLink();

  // Auto close modals if enabled
  if (shouldHide("auto-close-modals")) {
    autoCloseReferralModals();
  }
}

/**
 * Cleanup sidebar elements
 */
function cleanupSidebar() {
  const sidebar = document.querySelector(".sidebar__content");
  if (!sidebar) return;
  processElementsByConfig(SIDEBAR_SELECTORS);
}

/**
 * Setup observer to watch for sidebar open/close
 */
function setupSidebarObserver() {
  if (sidebarObserverSetup) return;

  const sidebarContainer = document.querySelector(
    ".ug-sidebar.sidebar.mentee-sidebar",
  );
  if (!sidebarContainer) {
    setTimeout(setupSidebarObserver, 1000);
    return;
  }

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        const target = mutation.target;
        if (target.classList.contains("sidebar__open")) {
          setTimeout(cleanupSidebar, 100);
          setTimeout(cleanupSidebar, 500);
        }
      }
    });
  });

  observer.observe(sidebarContainer, {
    attributes: true,
    attributeFilter: ["class"],
  });
  sidebarObserverSetup = true;

  if (sidebarContainer.classList.contains("sidebar__open")) {
    cleanupSidebar();
  }
}

/**
 * Run all cleanup tasks
 */
async function runCleanup() {
  if (!isExtensionValid()) return;
  await loadSettings();
  injectStyles();
  cleanupGlobal();
  cleanupTodosPage();
  cleanupSidebar();
  setupSidebarObserver();
  setupModalObserver();
  handlePracticeMode();
}

/**
 * Handle URL changes (SPA navigation)
 */
function handleUrlChange() {
  if (location.href !== lastUrl) {
    lastUrl = location.href;
    setTimeout(runCleanup, 1500);
    setTimeout(runCleanup, 3000);
  }
}

/**
 * Setup URL change detection
 */
function setupUrlChangeDetection() {
  window.addEventListener("popstate", () => setTimeout(handleUrlChange, 100));

  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;

  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    setTimeout(handleUrlChange, 100);
  };

  history.replaceState = function (...args) {
    originalReplaceState.apply(this, args);
    setTimeout(handleUrlChange, 100);
  };

  const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) handleUrlChange();
  });

  observer.observe(document.body, { childList: true, subtree: true });
  setInterval(handleUrlChange, 2000);
}

/**
 * Listen for messages from popup - INSTANT UPDATES
 */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "settingsUpdated") {
    currentSettings = { ...DEFAULT_SETTINGS, ...message.settings };
    applyAllSettings();
    sendResponse({ success: true });
  } else if (message.action === "toggleSetting") {
    // Handle individual toggle change
    const { key, value } = message;
    currentSettings[key] = value;

    // Special handling for different feature types
    if (key === "core-curriculum") {
      handleCoreCurriculumVisibility();
    } else if (key === "referral-popup") {
      if (value) {
        hideReferralPopup();
      } else {
        // Show the popup (remove hidden class)
        const elements = document.querySelectorAll(
          `[${CLEANER_ATTR}="referral-popup"]`,
        );
        elements.forEach((el) => el.classList.remove(HIDDEN_CLASS));
      }
    } else if (key === "auto-close-modals") {
      if (value) {
        autoCloseReferralModals();
      }
    } else if (key === "problem-search") {
      // Toggle problem search bar
      if (value) {
        initProblemsSearch();
      } else {
        removeSearchBar();
      }
    } else if (key === "practice-mode") {
      if (value) {
        handlePracticeMode();
      } else {
        // Clearing data is handled in popup.js but we can also do it here if needed
        // For consistency, let popup.js do the heavy lifting of storage clearing
      }
    } else if (key === "practice-mode-days") {
      // Just update local settings
    } else if (key === "leetcode-link") {
      // Toggle LeetCode link
      if (value) {
        initLeetCodeLink();
      } else {
        // Remove existing link
        const existingLink = document.querySelector(".scaler-leetcode-link");
        if (existingLink) {
          existingLink.remove();
        }
      }
    } else {
      updateVisibilityForKey(key, value);
    }

    sendResponse({ success: true });
  }
  return true;
});

// ============================================
// Initialize
// ============================================

window.addEventListener("load", async () => {
  await loadSettings();
  injectStyles();
  setupUrlChangeDetection();
  setupModalObserver();
  setTimeout(runCleanup, 1000);
  setTimeout(runCleanup, 2500);
  setTimeout(runCleanup, 5000);

  // Initialize problems search if on problems page
  setTimeout(initProblemsSearch, 1500);
});

document.addEventListener("DOMContentLoaded", async () => {
  await loadSettings();
  injectStyles();
  setupModalObserver();
  setTimeout(runCleanup, 500);

  // Initialize problems search if on problems page
  setTimeout(initProblemsSearch, 1000);
});

// ============================================
// PROBLEMS PAGE SEARCH FEATURE
// ============================================

let problemsData = null;
let searchBarInjected = false;
let isSearchActive = false;

/**
 * Check if current page is the problems page
 */
function isProblemsPage() {
  return location.pathname.includes("/academy/mentee-dashboard/problems");
}

/**
 * Inject search bar styles - LIGHT MODE to match Scaler UI
 */
function injectSearchStyles() {
  if (document.getElementById("scaler-search-styles")) return;

  const style = document.createElement("style");
  style.id = "scaler-search-styles";
  style.textContent = `
    .scaler-search-container {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: #ffffff;
      border: 1px solid #e0e0e0;
      border-radius: 10px;
      margin: 12px 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
    }
    
    .scaler-search-container:focus-within {
      border-color: #2563eb;
      box-shadow: 0 2px 12px rgba(37, 99, 235, 0.15);
    }
    
    .scaler-search-icon {
      color: #6b7280;
      font-size: 16px;
      display: flex;
      align-items: center;
    }
    
    .scaler-search-input {
      flex: 1;
      background: transparent;
      border: none;
      outline: none;
      color: #1f2937;
      font-size: 14px;
      font-family: inherit;
    }
    
    .scaler-search-input::placeholder {
      color: #9ca3af;
    }
    
    .scaler-search-shortcut {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      background: #f3f4f6;
      border: 1px solid #e5e7eb;
      border-radius: 6px;
      color: #6b7280;
      font-size: 12px;
      font-weight: 500;
    }
    
    .scaler-search-shortcut kbd {
      background: #ffffff;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: monospace;
      font-size: 11px;
      border: 1px solid #d1d5db;
      color: #374151;
    }
    
    .scaler-search-clear {
      display: none;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      background: #f3f4f6;
      border: none;
      border-radius: 50%;
      color: #6b7280;
      cursor: pointer;
      transition: background 0.2s;
      font-size: 12px;
    }
    
    .scaler-search-clear:hover {
      background: #e5e7eb;
      color: #374151;
    }
    
    .scaler-search-clear.visible {
      display: flex;
    }
    
    .scaler-search-results-count {
      color: #6b7280;
      font-size: 13px;
      white-space: nowrap;
    }
    
    .scaler-search-results-count strong {
      color: #2563eb;
    }
    
    /* Highlight matching text in problem names */
    .scaler-highlight {
      background: rgba(37, 99, 235, 0.15);
      color: #1e40af;
      padding: 1px 3px;
      border-radius: 3px;
      font-weight: 500;
    }
    
    /* Hidden row class for filtering */
    .scaler-search-hidden {
      display: none !important;
    }
    
    /* Search mode indicator */
    .scaler-search-mode {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
      color: white;
      padding: 10px 16px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 500;
      box-shadow: 0 4px 12px rgba(37, 99, 235, 0.4);
      z-index: 10000;
      display: none;
      align-items: center;
      gap: 8px;
    }
    
    .scaler-search-mode.visible {
      display: flex;
      animation: slideIn 0.3s ease;
    }
    
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

/**
 * Inject the search bar into the problems page
 */
function injectSearchBar() {
  if (!isProblemsPage()) return;

  // Check if search bar already exists in DOM (prevents duplicates)
  const existingSearchBar = document.getElementById("scaler-problem-search");
  if (existingSearchBar) {
    searchBarInjected = true;
    return;
  }

  if (searchBarInjected) return;

  // Find the problem tabs container
  const problemTabs = document.querySelector(
    ".problem-tabs.problem-tabs__right-padding",
  );
  if (!problemTabs) return;

  injectSearchStyles();

  // Create search container
  const searchContainer = document.createElement("div");
  searchContainer.className = "scaler-search-container";
  searchContainer.id = "scaler-problem-search";
  searchContainer.innerHTML = `
    <span class="scaler-search-icon">🔍</span>
    <input 
      type="text" 
      class="scaler-search-input" 
      id="scaler-search-input"
      placeholder="Search by name, topic, type, or day..."
      autocomplete="off"
    >
    <button class="scaler-search-clear" id="scaler-search-clear" title="Clear search">✕</button>
    <span class="scaler-search-results-count" id="scaler-search-count"></span>
    <span class="scaler-search-shortcut">
      Press <kbd>/</kbd> to focus
    </span>
  `;

  // Insert after problem tabs
  problemTabs.insertAdjacentElement("afterend", searchContainer);

  // Create search mode indicator (only if it doesn't exist)
  if (!document.getElementById("scaler-search-mode")) {
    const modeIndicator = document.createElement("div");
    modeIndicator.className = "scaler-search-mode";
    modeIndicator.id = "scaler-search-mode";
    modeIndicator.innerHTML = `
      <span>🔍 Search Mode Active</span>
      <span style="opacity: 0.7">Press Esc to exit</span>
    `;
    document.body.appendChild(modeIndicator);
  }

  // Setup event listeners
  setupSearchListeners();

  searchBarInjected = true;
  // console.log('[Scaler DOM Cleaner] Search bar injected');
}

/**
 * Setup search event listeners
 */
function setupSearchListeners() {
  const searchInput = document.getElementById("scaler-search-input");
  const clearBtn = document.getElementById("scaler-search-clear");

  if (!searchInput) return;

  // Input handler - filter as user types
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    filterProblems(query);

    // Show/hide clear button
    clearBtn.classList.toggle("visible", query.length > 0);
  });

  // Focus handler
  searchInput.addEventListener("focus", () => {
    activateSearchMode();
  });

  // Blur handler (but keep search mode if there's a query)
  searchInput.addEventListener("blur", () => {
    const query = searchInput.value.trim();
    if (query.length === 0) {
      deactivateSearchMode();
    }
  });

  // Clear button handler
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.classList.remove("visible");
    filterProblems("");
    searchInput.focus();
  });

  // Escape key to clear and exit search
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      searchInput.value = "";
      clearBtn.classList.remove("visible");
      filterProblems("");
      searchInput.blur();
      deactivateSearchMode();
    }
  });

  // Global "/" key to focus search
  document.addEventListener("keydown", (e) => {
    // Skip if already in an input field
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") {
      return;
    }

    // "/" key to focus search
    if (e.key === "/" && isProblemsPage()) {
      e.preventDefault();
      activateSearchMode();
      searchInput.focus();
    }
  });
}

/**
 * Activate search mode - switch to All Problems tab
 */
function activateSearchMode() {
  if (isSearchActive) return;
  isSearchActive = true;

  // Show mode indicator
  const indicator = document.getElementById("scaler-search-mode");
  if (indicator) {
    indicator.classList.add("visible");
  }

  // Click on "All Problems" tab to load all problems
  const allProblemsTab = document.querySelector(
    ".problem-tabs-navigation__header:first-child",
  );
  if (allProblemsTab && !allProblemsTab.classList.contains("active")) {
    allProblemsTab.click();
    // console.log('[Scaler DOM Cleaner] Switched to All Problems tab');
  }
}

/**
 * Deactivate search mode
 */
function deactivateSearchMode() {
  isSearchActive = false;

  // Hide mode indicator
  const indicator = document.getElementById("scaler-search-mode");
  if (indicator) {
    indicator.classList.remove("visible");
  }

  // Clear the result count
  const countEl = document.getElementById("scaler-search-count");
  if (countEl) {
    countEl.textContent = "";
  }
}

/**
 * Filter problems based on search query
 */
function filterProblems(query) {
  const problemRows = document.querySelectorAll(
    ".problems-list__table .column",
  );
  const countEl = document.getElementById("scaler-search-count");

  if (!problemRows.length) return;

  let visibleCount = 0;
  let totalCount = problemRows.length;

  if (query.length === 0) {
    // Show all problems
    problemRows.forEach((row) => {
      row.classList.remove("scaler-search-hidden");
      // Remove any highlights
      const nameEl = row.querySelector(".problem__item--name a");
      if (nameEl && nameEl.dataset.originalText) {
        nameEl.innerHTML = nameEl.dataset.originalText;
      }
    });

    if (countEl) {
      countEl.textContent = "";
    }
    return;
  }

  const searchTerms = query.toLowerCase().split(/\s+/);

  problemRows.forEach((row) => {
    const nameEl = row.querySelector(".problem__item--name a");
    const dayEl = row.querySelector(".problem__item--days");
    const typeEl = row.querySelector(".problem__item--judge");
    const topicEl = row.querySelector(".problem__item--topic");

    if (!nameEl) return;

    // Store original text if not already stored
    if (!nameEl.dataset.originalText) {
      nameEl.dataset.originalText = nameEl.textContent;
    }

    const problemName = nameEl.dataset.originalText.toLowerCase();
    const dayText = dayEl ? dayEl.textContent.toLowerCase() : "";

    // Get type text (Code/Objective)
    const typeText = typeEl ? typeEl.textContent.toLowerCase().trim() : "";

    // Try to extract topic from the problem URL or other sources
    let topicText = "";
    if (topicEl) {
      // If topic is visible, use it
      topicText = topicEl.textContent.toLowerCase().trim();
    }
    // Also try to extract topic hints from the problem name for better matching
    // Common topics: array, string, tree, graph, dp, binary search, linked list, etc.
    const topicKeywords = [
      "array",
      "string",
      "tree",
      "graph",
      "dp",
      "dynamic programming",
      "binary search",
      "linked list",
      "stack",
      "queue",
      "heap",
      "hash",
      "recursion",
      "backtracking",
      "greedy",
      "sorting",
      "searching",
      "matrix",
      "bit manipulation",
      "math",
      "two pointers",
      "sliding window",
      "dfs",
      "bfs",
      "sql",
      "java",
      "python",
      "javascript",
      "css",
      "html",
      "react",
      "spring",
      "api",
      "database",
      "lld",
      "hld",
      "design",
      "machine learning",
      "ml",
      "time series",
      "pca",
      "clustering",
    ];

    // Combine all searchable text
    const searchText =
      `${problemName} ${dayText} ${typeText} ${topicText}`.toLowerCase();

    // Check if all search terms match
    const matches = searchTerms.every((term) => searchText.includes(term));

    if (matches) {
      row.classList.remove("scaler-search-hidden");
      visibleCount++;

      // Highlight matching text in name
      let highlightedName = nameEl.dataset.originalText;
      searchTerms.forEach((term) => {
        if (term.length > 0) {
          const regex = new RegExp(`(${escapeRegex(term)})`, "gi");
          highlightedName = highlightedName.replace(
            regex,
            '<span class="scaler-highlight">$1</span>',
          );
        }
      });
      nameEl.innerHTML = highlightedName;
    } else {
      row.classList.add("scaler-search-hidden");
      // Restore original text
      nameEl.innerHTML = nameEl.dataset.originalText;
    }
  });

  // Update count
  if (countEl) {
    countEl.innerHTML = `<strong>${visibleCount}</strong> of ${totalCount} problems`;
  }
}

/**
 * Escape regex special characters
 */
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Initialize problems search feature
 */
function initProblemsSearch() {
  if (!isProblemsPage()) {
    // Clean up if navigated away
    removeSearchBar();
    return;
  }

  // Check if feature is enabled
  if (!shouldHide("problem-search")) {
    // Feature is disabled
    removeSearchBar();
    return;
  }

  // Try to inject search bar
  injectSearchBar();

  // Retry if not injected (page might still be loading)
  if (!searchBarInjected) {
    setTimeout(initProblemsSearch, 1000);
  }
}

/**
 * Remove the search bar if it exists
 */
function removeSearchBar() {
  const searchContainer = document.getElementById("scaler-problem-search");
  const modeIndicator = document.getElementById("scaler-search-mode");

  if (searchContainer) {
    searchContainer.remove();
  }
  if (modeIndicator) {
    modeIndicator.remove();
  }

  // Reset state
  searchBarInjected = false;
  isSearchActive = false;

  // Show all problems that might have been hidden
  const hiddenRows = document.querySelectorAll(".scaler-search-hidden");
  hiddenRows.forEach((row) => row.classList.remove("scaler-search-hidden"));
}

// Re-check for problems page on URL change
const originalHandleUrlChange = handleUrlChange;
handleUrlChange = function () {
  originalHandleUrlChange();

  // Reset search bar state on navigation
  searchBarInjected = false;
  isSearchActive = false;

  // Re-initialize search if on problems page
  if (isProblemsPage()) {
    setTimeout(initProblemsSearch, 1500);
  }

  // Handle practice mode on URL change
  setTimeout(handlePracticeMode, 2000);
};

/**
 * Handle Practice Mode - Auto-reset code in assignments
 */
async function handlePracticeMode() {
  if (!isExtensionValid()) return;
  if (!currentSettings["practice-mode"]) return;

  // Check for expiration
  if (currentSettings["practice-mode-start"]) {
    const elapsed = Date.now() - currentSettings["practice-mode-start"];
    const expiryMs =
      (currentSettings["practice-mode-days"] || 7) * 24 * 60 * 60 * 1000;
    if (elapsed > expiryMs) {
      // Auto-disable practice mode
      currentSettings["practice-mode"] = false;
      currentSettings["practice-mode-start"] = null;
      if (isExtensionValid()) {
        chrome.storage.sync.set({ cleanerSettings: currentSettings });
      }
      // console.log("[Scaler DOM Cleaner] Practice mode expired and auto-disabled");
      return;
    }
  }

  if (!location.href.includes("assignment")) return;

  const match = location.pathname.match(
    /\/class\/(\d+)\/assignment\/problems\/(\d+)/,
  );
  if (!match) return;

  const classId = match[1];
  const problemId = match[2];
  const storageKey = `reset_history_${classId}_${problemId}`;

  try {
    const result = await chrome.storage.local.get(storageKey);
    const lastReset = result[storageKey];
    const now = Date.now();
    const fiveHours = 5 * 60 * 60 * 1000;

    const reloadIcon = document.querySelector("i.cr-icon-refresh");
    const reloadBtn = reloadIcon ? reloadIcon.closest("a.tappable") : null;

    if (reloadBtn && !reloadBtn.dataset.resetListener) {
      reloadBtn.addEventListener("click", () => {
        if (isExtensionValid()) {
          chrome.storage.local.set({ [storageKey]: Date.now() });
        }
      });
      reloadBtn.dataset.resetListener = "true";
    }

    if (!lastReset || now - lastReset > fiveHours) {
      if (reloadBtn) {
        // Click the reload button
        reloadBtn.click();

        // Scaler usually shows a confirmation modal. We need to find the "Reset!" button in it.
        // We'll wait a bit for the modal to appear and then look for the confirm button.
        setTimeout(() => {
          if (!isExtensionValid()) return;
          try {
            const modals = document.querySelectorAll(".sr-modal");
            modals.forEach((modal) => {
              if (
                modal.textContent.includes("Are you sure?") ||
                modal.textContent.includes("Reset!") ||
                modal.textContent.includes("Code would be replaced")
              ) {
                const confirmBtn = modal.querySelector(
                  "a.dialog__action.btn-danger",
                );
                if (confirmBtn && confirmBtn.textContent.includes("Reset!")) {
                  confirmBtn.click();
                } else {
                  // Fallback to searching all buttons if the specific selector fails
                  const btns = Array.from(modal.querySelectorAll("button, a"));
                  const resetBtn = btns.find(
                    (b) => b.textContent.trim() === "Reset!",
                  );
                  if (resetBtn) resetBtn.click();
                }
              }
            });
          } catch (e) {
            // Silently fail if context lost
          }
        }, 800);

        // Update storage
        if (isExtensionValid()) {
          await chrome.storage.local.set({ [storageKey]: now });
        }
        // console.log(`[Scaler DOM Cleaner] Auto-reset code for question ${questionId}`);
      } else {
        // If button not found, retry after a short delay (page might still be rendering)
        // Only retry once to avoid infinite loops if the button is truly missing
        if (!window._practiceModeRetry) {
          window._practiceModeRetry = true;
          setTimeout(() => {
            if (!isExtensionValid()) return;
            handlePracticeMode();
            window._practiceModeRetry = false;
          }, 2000);
        }
      }
    }
  } catch (error) {
    if (
      !isExtensionValid() ||
      (error.message && error.message.includes("context invalidated"))
    ) {
      return;
    }
    console.error("[Scaler DOM Cleaner] Error in practice mode:", error);
  }
}

// ============================================
// LEETCODE LINK SUPPORT FOR ASSIGNMENTS
// ============================================

/**
 * Check if current page is an assignment problem page
 */
function isAssignmentProblemPage() {
  return (
    location.pathname.includes("/assignment/problems/") &&
    location.pathname.match(/\/problems\/\d+/)
  );
}

/**
 * Extract problem title from the page
 */
function extractProblemTitle() {
  let rawTitle = null;

  // Strategy 1: Specific Class (Priority) - cr-p-heading__text
  const specificSelectors = [
    ".cr-p-heading__text span",
    ".cr-p-heading__text",
    '[class*="heading__text"]',
    '[class*="heading_text"]',
  ];

  for (const sel of specificSelectors) {
    const el = document.querySelector(sel);
    if (el && el.innerText.trim()) {
      rawTitle = el.innerText;
      break;
    }
  }

  // Strategy 2: H1 fallback
  if (!rawTitle) {
    const h1 = document.querySelector("h1");
    if (h1) {
      rawTitle = h1.innerText;
    }
  }

  if (rawTitle) {
    // CLEANUP logic
    let clean = rawTitle
      .replace(/^Q\d+\.\s*/i, "") // Remove Q1., Q2., etc.
      .replace(/<\/?>/g, "") // Remove tags
      .replace(/\bSolved\b/gi, "")
      .replace(/\bUnsolved\b/gi, "")
      .replace(/\s-\sProblem$/i, "") // Remove " - Problem"
      .replace(/\sProblem$/i, "")
      .trim();

    clean = clean.split("\n")[0].trim();
    return clean;
  }

  return null;
}

/**
 * Check LeetCode GraphQL for problem match
 */
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

  try {
    const response = await fetch(LEETCODE_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) return { found: false };

    const data = await response.json();
    const questions = data.data?.problemsetQuestionList?.questions || [];

    // Strict check for LeetCode internal search
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
  } catch (e) {
    console.error("[Scaler++] LeetCode GraphQL search failed:", e);
  }

  return { found: false };
}

/**
 * Check Google Search for LeetCode problem
 */
async function checkGoogleSearch(title) {
  const query = encodeURIComponent(`${title} site:leetcode.com/problems`);
  const searchUrl = `https://www.google.com/search?q=${query}`;

  try {
    const response = await fetch(searchUrl);
    if (!response.ok) throw new Error("Google Search Failed");

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
          title: verified.title,
        };
      }
    }
  } catch (e) {
    console.error("[Scaler++] Google search failed:", e);
  }

  return { found: false, url: null };
}

/**
 * Verify if the problem slug matches the title
 */
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

    if (question && question.title) {
      const leetCodeTitle = question.title;
      if (isTitleSimilar(userTitle, leetCodeTitle)) {
        return { valid: true, title: leetCodeTitle };
      }
    }
  } catch (e) {
    console.error("[Scaler++] LeetCode verification failed:", e);
  }

  return { valid: false, title: null };
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
 * Normalize problem title for cache key
 */
function normalizeTitleForCache(title) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .trim();
}

/**
 * Get cached LeetCode problem result
 */
async function getCachedLeetCodeResult(title) {
  try {
    const cacheKey = `leetcode_cache_${normalizeTitleForCache(title)}`;
    const result = await chrome.storage.local.get(cacheKey);

    if (result[cacheKey]) {
      const cached = result[cacheKey];

      // Check if cache is still valid (30 days)
      const CACHE_EXPIRY = 30 * 24 * 60 * 60 * 1000; // 30 days in ms
      const now = Date.now();

      if (cached.timestamp && now - cached.timestamp < CACHE_EXPIRY) {
        // console.log("[Scaler++] ⚡ Found in cache:", cached);
        return {
          found: true,
          url: cached.url,
          title: cached.title,
          fromCache: true,
        };
      } else {
        // Cache expired, remove it
        await chrome.storage.local.remove(cacheKey);
        // console.log("[Scaler++] Cache expired for:", title);
      }
    }

    return null;
  } catch (e) {
    console.error("[Scaler++] Error reading cache:", e);
    return null;
  }
}

/**
 * Save LeetCode problem result to cache
 */
async function cacheLeetCodeResult(title, url, leetcodeTitle) {
  try {
    const cacheKey = `leetcode_cache_${normalizeTitleForCache(title)}`;
    const cacheData = {
      url: url,
      title: leetcodeTitle,
      timestamp: Date.now(),
    };

    await chrome.storage.local.set({ [cacheKey]: cacheData });
    // console.log("[Scaler++] 💾 Cached result:", cacheKey, cacheData);
  } catch (e) {
    console.error("[Scaler++] Error saving to cache:", e);
  }
}

/**
 * Search for LeetCode problem via background script (avoids CORS)
 * Checks cache first for instant results!
 */
async function searchLeetCodeProblem(title) {
  try {
    // Check cache first
    const cachedResult = await getCachedLeetCodeResult(title);
    if (cachedResult) {
      return cachedResult;
    }

    // Not in cache, search via background script
    // console.log("[Scaler++] Sending message to background script:", {
    //   action: "searchLeetCodeProblem",
    //   title: title,
    // });

    const response = await chrome.runtime.sendMessage({
      action: "searchLeetCodeProblem",
      title: title,
    });

    // console.log(
    //   "[Scaler++] Received response from background script:",
    //   response,
    // );

    // Cache the result if found
    if (response.found && response.url) {
      await cacheLeetCodeResult(title, response.url, response.title);
    }

    return response;
  } catch (e) {
    console.error(
      "[Scaler++] Failed to communicate with background script:",
      e,
    );
    return { found: false, error: e.message };
  }
}

/**
 * Inject LeetCode link next to problem title
 */
function injectLeetCodeLink(leetcodeUrl) {
  // Find the target div (cr-p-heading__text)
  const headingTextDiv = document.querySelector(".cr-p-heading__text");

  if (!headingTextDiv) {
    // console.log("[Scaler++] Problem heading not found");
    return;
  }

  // Check if already injected
  if (headingTextDiv.querySelector(".scaler-leetcode-link")) {
    return;
  }

  // Create the LeetCode link container
  const linkContainer = document.createElement("a");
  linkContainer.href = leetcodeUrl;
  linkContainer.target = "_blank";
  linkContainer.className = "scaler-leetcode-link";
  linkContainer.style.marginLeft = "12px";
  linkContainer.style.display = "inline-flex";
  linkContainer.style.alignItems = "center";
  linkContainer.style.gap = "6px";
  linkContainer.style.padding = "4px 10px";
  linkContainer.style.backgroundColor = "#ffefd6ff";
  linkContainer.style.borderRadius = "6px";
  linkContainer.style.textDecoration = "none";
  linkContainer.style.transition = "all 0.2s ease";
  linkContainer.title = "View on LeetCode";

  // LeetCode icon
  const leetcodeIcon = document.createElement("img");
  leetcodeIcon.src = chrome.runtime.getURL("icons/leetcode_icon.png");
  leetcodeIcon.alt = "LeetCode";
  leetcodeIcon.style.width = "16px";
  leetcodeIcon.style.height = "16px";
  leetcodeIcon.style.objectFit = "contain";

  // External link icon (using Font Awesome style or simple text)
  const externalIcon = document.createElement("span");
  externalIcon.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16">
  <path d="M 18 5 L 18 7 L 23.5625 7 L 11.28125 19.28125 L 12.71875 20.71875 L 25 8.4375 L 25 14 L 27 14 L 27 5 Z M 5 9 L 5 27 L 23 27 L 23 14 L 21 16 L 21 25 L 7 25 L 7 11 L 16 11 L 18 9 Z"/>
</svg>
`;
  externalIcon.alt = "External Link";
  externalIcon.style.width = "16px";
  externalIcon.style.height = "16px";
  externalIcon.style.objectFit = "contain";

  linkContainer.appendChild(leetcodeIcon);
  linkContainer.appendChild(externalIcon);

  // Add hover effect
  linkContainer.addEventListener("mouseenter", () => {
    linkContainer.style.backgroundColor = "#fcb84bff";
    linkContainer.style.transform = "translateY(-2px) scale(1.02)";
    linkContainer.style.boxShadow = "0 4px 12px rgba(252, 184, 75, 0.3)";
  });

  linkContainer.addEventListener("mouseleave", () => {
    linkContainer.style.backgroundColor = "#ffefd6ff";
    linkContainer.style.transform = "translateY(0) scale(1)";
    linkContainer.style.boxShadow = "none";
  });

  // Append to the heading div
  headingTextDiv.appendChild(linkContainer);
  // console.log("[Scaler++] LeetCode link injected successfully");
}

/**
 * Initialize LeetCode link feature
 */
async function initLeetCodeLink() {
  if (!isAssignmentProblemPage()) {
    return;
  }

  // Check if the feature is enabled in settings
  if (!shouldHide("leetcode-link")) {
    // Remove existing link if feature is disabled
    const existingLink = document.querySelector(".scaler-leetcode-link");
    if (existingLink) {
      existingLink.remove();
    }
    return;
  }

  // Check if LeetCode link is already injected - avoid duplicate searches
  const headingTextDiv = document.querySelector(".cr-p-heading__text");
  if (headingTextDiv && headingTextDiv.querySelector(".scaler-leetcode-link")) {
    // Already injected, skip search
    return;
  }

  // Wait for the page to fully load
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const problemTitle = extractProblemTitle();

  if (!problemTitle) {
    // console.log("[Scaler++] Could not extract problem title");
    return;
  }

  // console.log(`[Scaler++] Searching for "${problemTitle}" on LeetCode...`);

  const result = await searchLeetCodeProblem(problemTitle);

  if (result.found && result.url) {
    const source = result.fromCache ? "(cached ⚡)" : "(searched 🔍)";
    // console.log(
    //   `[Scaler++] Found LeetCode problem ${source}: ${result.title} - ${result.url}`,
    // );
    injectLeetCodeLink(result.url);
  } else {
    // console.log("[Scaler++] No matching LeetCode problem found");
  }
}

// Initialize LeetCode link on page load
window.addEventListener("load", () => {
  setTimeout(initLeetCodeLink, 2000);
});

// Also check on URL changes
const originalHandleUrlChange2 = handleUrlChange;
handleUrlChange = function () {
  if (originalHandleUrlChange2) {
    originalHandleUrlChange2();
  }

  // Check for assignment problem pages
  if (isAssignmentProblemPage()) {
    setTimeout(initLeetCodeLink, 2000);
  }
};
