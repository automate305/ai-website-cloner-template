// Service worker: routes the toolbar click and the keyboard command to the
// active tab's content script, and keeps the toolbar badge in sync.

async function toggleActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || tab.id == null) return;

  try {
    const result = await chrome.tabs.sendMessage(tab.id, { type: "TOGGLE_SPOTLIGHT" });
    updateBadge(tab.id, result?.enabled ?? false);
  } catch {
    // The content script isn't present on this page (e.g. chrome:// pages,
    // the Chrome Web Store, or a tab open before the extension loaded).
    // Try injecting it once, then retry.
    try {
      await chrome.scripting.insertCSS({ target: { tabId: tab.id }, files: ["content.css"] });
      await chrome.scripting.executeScript({ target: { tabId: tab.id }, files: ["content.js"] });
      const result = await chrome.tabs.sendMessage(tab.id, { type: "TOGGLE_SPOTLIGHT" });
      updateBadge(tab.id, result?.enabled ?? false);
    } catch {
      // Injection is blocked on restricted pages — nothing we can do there.
    }
  }
}

function updateBadge(tabId, enabled) {
  chrome.action.setBadgeText({ tabId, text: enabled ? "ON" : "" });
  chrome.action.setBadgeBackgroundColor({ tabId, color: "#e11d2a" });
}

chrome.action.onClicked.addListener(toggleActiveTab);

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-spotlight") toggleActiveTab();
});

// Let a content script report its state change (e.g. Esc pressed in-page) so
// the badge stays accurate.
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message?.type === "SPOTLIGHT_STATE" && sender.tab?.id != null) {
    updateBadge(sender.tab.id, message.enabled);
  }
});
