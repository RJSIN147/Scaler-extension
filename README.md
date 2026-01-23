# 🧹 Scaler DOM Cleaner

A Chrome extension that customizes the Scaler Academy interface by hiding promotional and distracting elements, creating a cleaner, more focused learning environment.

[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Available-green?logo=googlechrome)](https://chrome.google.com/webstore)
[![Version](https://img.shields.io/badge/Version-1.3.0-blue)]()
[![License](https://img.shields.io/badge/License-MIT-yellow)]()

---

## ✨ Features

### 🌍 Global Elements (All Pages)

| Element             | Description                                   |
| ------------------- | --------------------------------------------- |
| Refer & Earn Button | Hide the ₹ referral button in header          |
| Scaler Coins        | Remove coin counter linking to store          |
| Core Curriculum     | Quick access icon next to Scaler logo         |
| Notebook Widget     | Hide floating notebook button                 |
| Referral Popup      | Auto-hide referral modal with coins & rewards |
| Auto-Close Modals   | Auto-dismiss referral/NSET popups             |

### 📋 Dashboard Elements (Todos Page)

| Element             | Description                                   |
| ------------------- | --------------------------------------------- |
| 2025 Revisited Card | "Check out your year at SST" sidebar card     |
| Referral Stats Box  | "X People Referred" live counter              |
| Mess Fee Card       | Smart hide (auto-shows last 10 days of month) |
| Continue Watching   | Past recordings carousel                      |
| Referral Banner     | "Continue your Referral Rewards" banner       |

### 📂 Sidebar Elements

| Element            | Description                           |
| ------------------ | ------------------------------------- |
| SST Goodies Link   | Store link with money icon            |
| Refer Friends Link | "Refer Friends to SST" with NEW badge |
| Refer Promo Card   | "Come, let's grow together" card      |

### 🔍 Problem Search Bar (NEW!)

- **Instant Search** - Search 1000+ problems by name, topic, type, or day
- **Keyboard Shortcut** - Press `/` to focus instantly
- **Real-time Filtering** - Results filter as you type
- **Smart Highlighting** - Matching text highlighted in results
- **Type Filtering** - Filter by "Code" or "Objective" problems

---

## 🚀 Installation

### From Chrome Web Store (Recommended)

1. Visit the [Chrome Web Store listing](#)
2. Click "Add to Chrome"
3. Done!

### Manual Installation (Developer Mode)

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ritesh381/Scaler-DOM-Cleaner.git
   ```

2. **Open Chrome Extensions**
   - Go to `chrome://extensions/`
   - Enable "Developer mode" (top-right toggle)

3. **Load the extension**
   - Click "Load unpacked"
   - Select the `ScalerClean` folder

4. **Visit Scaler Academy**
   - Go to [scaler.com/academy/mentee-dashboard](https://www.scaler.com/academy/mentee-dashboard/todos)
   - Click the extension icon to customize

---

## 🎯 How to Use

1. Click the extension icon in your Chrome toolbar
2. Toggle elements ON/OFF as per your preference
3. Changes apply instantly - no page reload needed!
4. Press `/` on the problems page to search problems

---

## 🔒 Privacy

- **No data collection** - We don't collect any personal information
- **Local storage only** - Preferences stored in your browser
- **No analytics** - No tracking or third-party services
- **No network requests** - All code runs locally

---

## 📁 Project Structure

```
ScalerClean/
├── manifest.json      # Extension configuration
├── content.js         # Main script (DOM manipulation)
├── popup.html         # Settings popup UI
├── popup.js           # Popup logic
├── popup.css          # Popup styles
├── icons/             # Extension icons (16, 32, 48, 128px)
└── README.md          # This file
```

---

## 🛠️ Tech Stack

- **Manifest V3** - Latest Chrome extension standard
- **Vanilla JavaScript** - No external dependencies
- **Chrome Storage API** - For syncing preferences
- **MutationObserver** - For handling dynamic content

---

## 📝 Changelog

### v1.3.0

- Added Problem Search Bar with keyboard shortcut (/)
- Moved Core Curriculum to header (all pages)
- Moved Refer & Earn and Scaler Coins to global
- Added custom extension icons
- Light mode search bar UI

### v1.2.0

- Added Referral Popup hide
- Added Auto-Close Modals feature
- Improved SPA navigation support

### v1.1.0

- Added instant apply (no save button)
- Added toggle switches for each element
- Added sidebar cleanup

### v1.0.0

- Initial release
- Basic element hiding functionality

---

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests

---

## 📄 License

MIT License - feel free to use and modify!

---

## 👨‍💻 Author

**Ritesh Prajapati**

Made with ❤️ for the Scaler community

---

_Focus on what matters - your learning journey!_
