// ============================================
// Scaler DOM Cleaner - Enhanced SPA Support
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
  try {
    const result = await chrome.storage.sync.get("cleanerSettings");
    if (result.cleanerSettings) {
      currentSettings = { ...DEFAULT_SETTINGS, ...result.cleanerSettings };
    }
  } catch (error) {
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
  await loadSettings();
  injectStyles();
  cleanupGlobal();
  cleanupTodosPage();
  cleanupSidebar();
  setupSidebarObserver();
  setupModalObserver();
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
};
