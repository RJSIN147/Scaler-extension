// ============================================
// cleaner/modalHandler.js
// MutationObserver for referral modal detection
// ============================================

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
}
