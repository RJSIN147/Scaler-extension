// IP Spoof Extension for Scaler

// Define spoofed IP addresses (you can customize these)
const SPOOFED_IPS = {
  primary: '203.0.113.195',      // RFC 5737 test IP
  secondary: '198.51.100.1',     // RFC 5737 test IP
  tertiary: '192.0.2.1',         // RFC 5737 test IP
  india: '103.21.125.1',         // Indian IP range
  usa: '104.16.0.1',             // Cloudflare US IP
  uk: '31.55.185.1',             // UK IP range
  germany: '46.4.0.1',           // German IP range
  japan: '133.242.0.1'           // Japanese IP range
};

// Get random IP from the list
function getRandomIP() {
  const ipKeys = Object.keys(SPOOFED_IPS);
  const randomKey = ipKeys[Math.floor(Math.random() * ipKeys.length)];
  return SPOOFED_IPS[randomKey];
}

// Get current spoofed IP from storage or use random
async function getCurrentSpoofedIP() {
  try {
    const result = await chrome.storage.local.get(['spoofedIP']);
    if (result.spoofedIP) {
      return result.spoofedIP;
    } else {
      const randomIP = getRandomIP();
      await chrome.storage.local.set({ spoofedIP: randomIP });
      return randomIP;
    }
  } catch (e) {
    return getRandomIP();
  }
}

// Update declarative net request rules with current spoofed IP
async function updateSpoofRules() {
  try {
    const spoofedIP = await getCurrentSpoofedIP();

    // Remove existing rules
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1, 2, 3, 4, 5, 6]
    });

    // Add new rules for IP spoofing
    const rules = [
      // Rule 1: Spoof X-Forwarded-For header
      {
        id: 1,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            {
              header: 'X-Forwarded-For',
              operation: 'set',
              value: spoofedIP
            }
          ]
        },
        condition: {
          urlFilter: '||scaler.com^',
          resourceTypes: [
            'main_frame',
            'sub_frame',
            'stylesheet',
            'script',
            'image',
            'font',
            'object',
            'xmlhttprequest',
            'ping',
            'csp_report',
            'media',
            'websocket',
            'other'
          ]
        }
      },

      // Rule 2: Spoof X-Real-IP header
      {
        id: 2,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            {
              header: 'X-Real-IP',
              operation: 'set',
              value: spoofedIP
            }
          ]
        },
        condition: {
          urlFilter: '||scaler.com^',
          resourceTypes: [
            'main_frame',
            'sub_frame',
            'stylesheet',
            'script',
            'image',
            'font',
            'object',
            'xmlhttprequest',
            'ping',
            'csp_report',
            'media',
            'websocket',
            'other'
          ]
        }
      },

      // Rule 3: Spoof X-Client-IP header
      {
        id: 3,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            {
              header: 'X-Client-IP',
              operation: 'set',
              value: spoofedIP
            }
          ]
        },
        condition: {
          urlFilter: '||scaler.com^',
          resourceTypes: [
            'main_frame',
            'sub_frame',
            'stylesheet',
            'script',
            'image',
            'font',
            'object',
            'xmlhttprequest',
            'ping',
            'csp_report',
            'media',
            'websocket',
            'other'
          ]
        }
      },

      // Rule 4: Spoof CF-Connecting-IP (Cloudflare)
      {
        id: 4,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            {
              header: 'CF-Connecting-IP',
              operation: 'set',
              value: spoofedIP
            }
          ]
        },
        condition: {
          urlFilter: '||scaler.com^',
          resourceTypes: [
            'main_frame',
            'sub_frame',
            'stylesheet',
            'script',
            'image',
            'font',
            'object',
            'xmlhttprequest',
            'ping',
            'csp_report',
            'media',
            'websocket',
            'other'
          ]
        }
      },

      // Rule 5: Spoof X-Forwarded-Proto
      {
        id: 5,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            {
              header: 'X-Forwarded-Proto',
              operation: 'set',
              value: 'https'
            }
          ]
        },
        condition: {
          urlFilter: '||scaler.com^',
          resourceTypes: [
            'main_frame',
            'sub_frame',
            'stylesheet',
            'script',
            'image',
            'font',
            'object',
            'xmlhttprequest',
            'ping',
            'csp_report',
            'media',
            'websocket',
            'other'
          ]
        }
      },

      // Rule 6: Spoof X-Forwarded-Host
      {
        id: 6,
        priority: 1,
        action: {
          type: 'modifyHeaders',
          requestHeaders: [
            {
              header: 'X-Forwarded-Host',
              operation: 'set',
              value: 'www.scaler.com'
            }
          ]
        },
        condition: {
          urlFilter: '||scaler.com^',
          resourceTypes: [
            'main_frame',
            'sub_frame',
            'stylesheet',
            'script',
            'image',
            'font',
            'object',
            'xmlhttprequest',
            'ping',
            'csp_report',
            'media',
            'websocket',
            'other'
          ]
        }
      }
    ];

    await chrome.declarativeNetRequest.updateDynamicRules({
      addRules: rules
    });

    return spoofedIP;
  } catch (e) {
    console.error('[IP Spoof] Error updating spoof rules:', e);
    return null;
  }
}

async function initialize() {
  const result = await chrome.storage.local.get(['spoofedIP']);
  if (!result.spoofedIP) {
    await chrome.storage.local.set({ spoofedIP: SPOOFED_IPS.primary });
  }

  await updateSpoofRules();

  chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    try {
      if (message.action === 'contentScriptLoaded') {
        sendResponse({ acknowledged: true });
      } else if (message.action === 'getCurrentIP') {
        const ip = await getCurrentSpoofedIP();
        sendResponse({ spoofedIP: ip });
      } else {
        sendResponse({ error: 'Unknown action' });
      }
    } catch (error) {
      sendResponse({ error: error.message });
    }
    return true;
  });

  setInterval(async () => {
    try {
      const newRandomIP = getRandomIP();
      await chrome.storage.local.set({ spoofedIP: newRandomIP });
      await updateSpoofRules();
    } catch (error) {
      // Ignore rotation errors
    }
  }, 1800000);
}

initialize();