// ============================================
// core/urlObserver.js
// SPA URL change detection and routing hooks
// ============================================

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
