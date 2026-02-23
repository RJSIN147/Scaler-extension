// ============================================
// Scaler++ - Popup Script
// Instant Apply Mode - No Save Button Needed
// ============================================

// Default settings - all enabled by default
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

  // Enhancements
  "core-curriculum": true,
  "problem-search": true,
  "leetcode-link": true,
  "practice-mode": false,
  "practice-mode-days": 7,
  "practice-mode-start": null,
  "join-session": true,
  "companion-bypass": true,
  "subject-sort": true,

  // Assignment
  companion: true,
};

// All toggle IDs mapped to their setting keys
const TOGGLE_MAP = {
  "toggle-2025-revisited": "2025-revisited",
  "toggle-referral-stats": "referral-stats",
  "toggle-mess-fee": "mess-fee",
  "toggle-refer-earn": "refer-earn",
  "toggle-scaler-coins": "scaler-coins",
  "toggle-continue-watching": "continue-watching",
  "toggle-referral-banner": "referral-banner",
  "toggle-notebook-widget": "notebook-widget",
  "toggle-referral-popup": "referral-popup",
  "toggle-auto-close-modals": "auto-close-modals",
  "toggle-sst-goodies": "sst-goodies",
  "toggle-refer-friends": "refer-friends",
  "toggle-sidebar-refer-banner": "sidebar-refer-banner",
  "toggle-core-curriculum": "core-curriculum",
  "toggle-problem-search": "problem-search",
  "toggle-leetcode-link": "leetcode-link",
  "toggle-practice-mode": "practice-mode",
  "toggle-join-session": "join-session",
  "toggle-companion-bypass": "companion-bypass",
  "toggle-companion": "companion",
  "toggle-subject-sort": "subject-sort",
};

// Current settings state
let currentSettings = { ...DEFAULT_SETTINGS };

/**
 * Load settings from Chrome storage and update UI
 */
async function loadSettings() {
  try {
    const result = await chrome.storage.sync.get("cleanerSettings");
    currentSettings = { ...DEFAULT_SETTINGS, ...result.cleanerSettings };

    // Update all toggles based on saved settings
    Object.entries(TOGGLE_MAP).forEach(([toggleId, settingKey]) => {
      const toggle = document.getElementById(toggleId);
      if (toggle) {
        toggle.checked = currentSettings[settingKey] !== false;

        // Special handling for practice mode options visibility
        if (settingKey === "practice-mode") {
          const optionsDiv = document.getElementById("practice-mode-options");
          if (optionsDiv)
            optionsDiv.style.display = toggle.checked ? "block" : "none";
        }
      }
    });

    // Update days input
    const daysInput = document.getElementById("practice-mode-days");
    if (daysInput) daysInput.value = currentSettings["practice-mode-days"] || 7;
  } catch (error) {
    console.error("Error loading settings:", error);
  }
}

/**
 * Handle individual toggle change - INSTANT APPLY
 */
async function handleToggleChange(toggleId, settingKey) {
  const toggle = document.getElementById(toggleId);
  if (!toggle) return;

  const newValue = toggle.checked;
  currentSettings[settingKey] = newValue;

  try {
    // Special handling for practice mode
    if (settingKey === "practice-mode") {
      const optionsDiv = document.getElementById("practice-mode-options");
      if (optionsDiv) optionsDiv.style.display = newValue ? "block" : "none";

      if (newValue) {
        // Turning on: set start time
        currentSettings["practice-mode-start"] = Date.now();
      } else {
        // Turning off: clear reset history
        chrome.storage.local.get(null, (items) => {
          const keysToRemove = Object.keys(items).filter((k) =>
            k.startsWith("reset_history_"),
          );
          chrome.storage.local.remove(keysToRemove);
        });
        currentSettings["practice-mode-start"] = null;
      }
    }

    // Save to Chrome storage immediately
    await chrome.storage.sync.set({ cleanerSettings: currentSettings });

    // Notify content script to update visibility instantly
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tabs[0]?.id) {
      try {
        await chrome.tabs.sendMessage(tabs[0].id, {
          action: "toggleSetting",
          key: settingKey,
          value: newValue,
        });
      } catch (e) {
        // Content script might not be loaded on this page - that's okay
      }
    }

    // Show brief feedback based on feature type
    const isEnhancement = [
      "core-curriculum",
      "problem-search",
      "leetcode-link",
      "practice-mode",
      "join-session",
      "companion-bypass",
      "subject-sort",
    ].includes(settingKey);
    if (isEnhancement) {
      showToast(newValue ? "Enabled ✓" : "Disabled ✓", "success");
    } else {
      showToast(newValue ? "Hidden ✓" : "Visible ✓", "success");
    }
  } catch (error) {
    console.error("Error saving setting:", error);
    // Revert toggle on error
    toggle.checked = !newValue;
    currentSettings[settingKey] = !newValue;
    showToast("Error saving", "error");
  }
}

/**
 * Reset all settings to default
 */
async function resetSettings() {
  try {
    currentSettings = { ...DEFAULT_SETTINGS };

    // Reset storage
    await chrome.storage.sync.set({ cleanerSettings: DEFAULT_SETTINGS });

    // Update UI
    Object.entries(TOGGLE_MAP).forEach(([toggleId, settingKey]) => {
      const toggle = document.getElementById(toggleId);
      if (toggle) {
        toggle.checked = DEFAULT_SETTINGS[settingKey];
      }
    });

    // Notify content script
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tabs[0]?.id) {
      try {
        await chrome.tabs.sendMessage(tabs[0].id, {
          action: "settingsUpdated",
          settings: DEFAULT_SETTINGS,
        });
      } catch (e) {
        // Content script might not be loaded
      }
    }

    showToast("Reset to defaults ✓", "success");
  } catch (error) {
    console.error("Error resetting settings:", error);
    showToast("Error resetting", "error");
  }
}

/**
 * Show a toast notification
 */
function showToast(message, type = "success") {
  // Remove existing toast if any
  const existingToast = document.querySelector(".toast");
  if (existingToast) {
    existingToast.remove();
  }

  // Create new toast
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  // Remove after delay
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 1200);
}

/**
 * Initialize popup
 */
document.addEventListener("DOMContentLoaded", () => {
  // Load saved settings
  loadSettings();

  // Setup toggle change handlers - INSTANT APPLY
  Object.entries(TOGGLE_MAP).forEach(([toggleId, settingKey]) => {
    const toggle = document.getElementById(toggleId);
    if (toggle) {
      toggle.addEventListener("change", () => {
        handleToggleChange(toggleId, settingKey);
      });
    }
  });

  // Reset button handler
  const resetBtn = document.getElementById("reset-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetSettings);
  }

  // GitHub button handler
  const githubBtn = document.getElementById("github-btn");
  if (githubBtn) {
    githubBtn.addEventListener("click", () => {
      chrome.tabs.create({
        url: "https://github.com/Ritesh381/Scaler-extension",
      });
    });
  }

  // Practice mode days change handler
  const daysInput = document.getElementById("practice-mode-days");
  if (daysInput) {
    daysInput.addEventListener("change", async () => {
      const val = parseInt(daysInput.value) || 7;
      currentSettings["practice-mode-days"] = val;
      await chrome.storage.sync.set({ cleanerSettings: currentSettings });

      // Notify content script
      const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true,
      });
      if (tabs[0]?.id) {
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "toggleSetting",
          key: "practice-mode-days",
          value: val,
        });
      }
    });
  }

  // Add hover effect for toggle items
  document.querySelectorAll(".toggle-item").forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.01)";
    });
    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
    });
  });
});
