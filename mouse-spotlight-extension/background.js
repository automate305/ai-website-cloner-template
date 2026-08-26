// Service worker: handles the keyboard command (the toolbar button opens the
// popup instead of firing onClicked), and keeps the toolbar badge in sync with
// the spotlight's on/off state reported by content scripts.

async function ensureContentScript(tabId) {
  try {
    await chrome.tabs.sendMessage(tabId, { type: "PING" });
  } catch {
    // Not present yet (e.g. a tab open before the extension loaded). Inject it.
    await chrome.scripting.insertCSS({ target: { tabId }, files: ["content.css"] });
    await chrome.scripting.executeScript({ target: { tabId }, files: ["content.js"] });
  }
}

async function toggleActiveTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || tab.id == null) return;
  try {
    await ensureContentScript(tab.id);
    const state = await chrome.tabs.sendMessage(tab.id, { type: "TOGGLE_SPOTLIGHT" });
    updateBadge(tab.id, state?.enabled ?? false);
  } catch {
    // Injection is blocked on restricted pages (chrome://, Web Store) — nothing
    // we can do there.
  }
}

function updateBadge(tabId, enabled) {
  chrome.action.setBadgeText({ tabId, text: enabled ? "ON" : "" });
  chrome.action.setBadgeBackgroundColor({ tabId, color: "#e11d2a" });
}

chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-spotlight") toggleActiveTab();
});

// Content scripts report their state on every enable/disable (hotkey, popup, or
// Esc in-page) so the badge stays accurate.
chrome.runtime.onMessage.addListener((message, sender) => {
  if (message?.type === "SPOTLIGHT_STATE" && sender.tab?.id != null) {
    updateBadge(sender.tab.id, message.enabled);
  }
});
