// ============================================
// core/styleInjector.js
// CSS injection for hiding/showing elements
// ============================================

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
