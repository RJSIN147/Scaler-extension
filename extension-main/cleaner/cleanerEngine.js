// ============================================
// cleaner/cleanerEngine.js
// Core DOM cleaning and visibility logic
// ============================================

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
      }
    }
  });
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
