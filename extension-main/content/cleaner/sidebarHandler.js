// ============================================
// cleaner/sidebarHandler.js
// MutationObserver for sidebar open/close events
// ============================================

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
