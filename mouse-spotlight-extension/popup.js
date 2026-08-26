// Popup control panel. Talks to the active tab's content script to toggle the
// spotlight and adjust size / dim live. Injects the content script first if the
// tab predates the extension.

const els = {
  toggle: document.getElementById("toggle"),
  controls: document.getElementById("controls"),
  sizeVal: document.getElementById("sizeVal"),
  sizeBar: document.getElementById("sizeBar"),
  sizeMinus: document.getElementById("sizeMinus"),
  sizePlus: document.getElementById("sizePlus"),
  dim: document.getElementById("dim"),
  dimVal: document.getElementById("dimVal"),
  status: document.getElementById("status"),
};

let tabId = null;
let state = {
  enabled: false,
  size: 7,
  dim: 0.9,
  sizeMin: 1,
  sizeMax: 40,
  dimMin: 0.5,
  dimMax: 0.98,
};

function showStatus(text) {
  els.status.textContent = text;
  els.status.classList.add("show");
  els.controls.classList.add("disabled");
  els.toggle.classList.add("disabled");
}

async function ensureContentScript(id) {
  try {
    await chrome.tabs.sendMessage(id, { type: "PING" });
  } catch {
    await chrome.scripting.insertCSS({ target: { tabId: id }, files: ["content.css"] });
    await chrome.scripting.executeScript({ target: { tabId: id }, files: ["content.js"] });
  }
}

async function send(message) {
  const result = await chrome.tabs.sendMessage(tabId, message);
  if (result) state = { ...state, ...result };
  render();
  return result;
}

function render() {
  els.toggle.textContent = state.enabled ? "Turn Off" : "Turn On";
  els.toggle.classList.toggle("off", !state.enabled);

  els.sizeVal.textContent = String(state.size);
  const pct = ((state.size - state.sizeMin) / (state.sizeMax - state.sizeMin)) * 100;
  els.sizeBar.style.width = `${Math.max(0, Math.min(100, pct))}%`;

  const dimPct = Math.round(state.dim * 100);
  els.dimVal.textContent = `${dimPct}%`;
  els.dim.value = String(dimPct);
  els.dim.min = String(Math.round(state.dimMin * 100));
  els.dim.max = String(Math.round(state.dimMax * 100));
}

async function init() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || tab.id == null) {
    showStatus("No active tab.");
    return;
  }
  tabId = tab.id;

  try {
    await ensureContentScript(tabId);
  } catch {
    showStatus("Can't run on this page (browser-restricted, e.g. chrome:// or the Web Store). Open a normal website.");
    return;
  }

  await send({ type: "GET_STATE" });
  wireEvents();
}

function wireEvents() {
  els.toggle.addEventListener("click", () => {
    send({ type: "SET_ENABLED", value: !state.enabled });
  });

  els.sizeMinus.addEventListener("click", () => {
    send({ type: "SET_SIZE", value: state.size - 1 });
  });
  els.sizePlus.addEventListener("click", () => {
    send({ type: "SET_SIZE", value: state.size + 1 });
  });

  els.dim.addEventListener("input", () => {
    send({ type: "SET_DIM", value: Number(els.dim.value) / 100 });
  });
}

init();
