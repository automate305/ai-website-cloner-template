// Mouse Spotlight — content script.
// Ported from https://github.com/zhangchen0514/MouseSpotlight (a Windows Forms
// app). Here the "screen" is the current browser tab: a fixed overlay dims the
// page and a radial gradient cut into it follows the cursor. The overlay's
// background string is rewritten imperatively on each mousemove for smooth
// tracking without any framework in the loop.

(() => {
  // Guard against double-injection (content script + programmatic injection).
  if (window.__mouseSpotlightInstalled) return;
  window.__mouseSpotlightInstalled = true;

  const SIZE_UNIT = 20; // px per size step (matches the original's SIZE_UNIT)
  const SIZE_MIN = 1;
  const SIZE_MAX = 40;
  const SIZE_DEFAULT = 7;

  const ASPECT_UNIT = 0.2;
  const ASPECT_MIN = -10;
  const ASPECT_MAX = 10;
  const ASPECT_DEFAULT = 0;

  const DIM_MIN = 0.5;
  const DIM_MAX = 0.98;
  const DIM_DEFAULT = 0.9; // darker + more solid than the original's 0.82

  // Edge sharpness: the clear core runs out to CORE_STOP of the radius, then
  // fades to full dark by EDGE_STOP — a tight feather, not a big soft halo.
  const CORE_STOP = 0.72;
  const EDGE_STOP = 0.86;

  let enabled = false;
  let overlay = null;
  let size = SIZE_DEFAULT;
  let aspect = ASPECT_DEFAULT;
  let dim = DIM_DEFAULT;
  let pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  // Restore the last-used settings from previous sessions.
  try {
    chrome.storage?.local.get(
      ["spotlightSize", "spotlightAspect", "spotlightDim"],
      (v) => {
        if (typeof v.spotlightSize === "number") size = v.spotlightSize;
        if (typeof v.spotlightAspect === "number") aspect = v.spotlightAspect;
        if (typeof v.spotlightDim === "number") dim = v.spotlightDim;
        if (enabled) redraw();
      },
    );
  } catch {
    // storage unavailable — fall back to defaults
  }

  function persist() {
    try {
      chrome.storage?.local.set({
        spotlightSize: size,
        spotlightAspect: aspect,
        spotlightDim: dim,
      });
    } catch {
      /* ignore */
    }
  }

  function redraw() {
    if (!overlay) return;
    const lightH = size * SIZE_UNIT;
    const aspectFactor = Math.pow(ASPECT_UNIT + 1, aspect);
    const lightW = lightH / aspectFactor;
    const core = Math.round(CORE_STOP * 100);
    const edge = Math.round(EDGE_STOP * 100);
    overlay.style.background =
      `radial-gradient(ellipse ${lightW}px ${lightH}px at ${pos.x}px ${pos.y}px, ` +
      `transparent 0%, transparent ${core}%, rgba(0,0,0,${dim}) ${edge}%)`;
  }

  function isEditableTarget(target) {
    if (!(target instanceof HTMLElement)) return false;
    const tag = target.tagName;
    return tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable;
  }

  function onMouseMove(e) {
    pos = { x: e.clientX, y: e.clientY };
    redraw();
  }

  function onKeyDown(e) {
    if (isEditableTarget(e.target) || e.metaKey || e.ctrlKey || e.altKey) return;

    switch (e.key.toLowerCase()) {
      case "escape":
        disable();
        return;
      case "z":
        size = Math.min(SIZE_MAX, size + 1);
        break;
      case "x":
        size = Math.max(SIZE_MIN, size - 1);
        break;
      case "a":
        aspect = Math.max(ASPECT_MIN, aspect - 1);
        break;
      case "s":
        aspect = Math.min(ASPECT_MAX, aspect + 1);
        break;
      case "w":
        size = SIZE_DEFAULT;
        aspect = ASPECT_DEFAULT;
        break;
      default:
        return;
    }
    e.preventDefault();
    persist();
    redraw();
  }

  function broadcastState() {
    try {
      chrome.runtime?.sendMessage({ type: "SPOTLIGHT_STATE", enabled });
    } catch {
      /* ignore */
    }
  }

  function enable() {
    if (enabled) return;
    enabled = true;

    overlay = document.createElement("div");
    overlay.id = "mouse-spotlight-overlay";
    document.documentElement.appendChild(overlay);
    document.documentElement.classList.add("mouse-spotlight-active");

    window.addEventListener("mousemove", onMouseMove, true);
    window.addEventListener("keydown", onKeyDown, true);
    redraw();
    broadcastState();
  }

  function disable() {
    if (!enabled) return;
    enabled = false;

    window.removeEventListener("mousemove", onMouseMove, true);
    window.removeEventListener("keydown", onKeyDown, true);
    document.documentElement.classList.remove("mouse-spotlight-active");
    overlay?.remove();
    overlay = null;
    broadcastState();
  }

  function toggle() {
    if (enabled) disable();
    else enable();
    return enabled;
  }

  function clamp(n, lo, hi) {
    return Math.max(lo, Math.min(hi, n));
  }

  function currentState() {
    return {
      enabled,
      size,
      dim,
      sizeMin: SIZE_MIN,
      sizeMax: SIZE_MAX,
      dimMin: DIM_MIN,
      dimMax: DIM_MAX,
    };
  }

  // Messages come from the background worker (hotkey) and the popup panel.
  chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    switch (message?.type) {
      case "TOGGLE_SPOTLIGHT":
        toggle();
        break;
      case "SET_ENABLED":
        message.value ? enable() : disable();
        break;
      case "SET_SIZE":
        size = clamp(Math.round(message.value), SIZE_MIN, SIZE_MAX);
        persist();
        redraw();
        break;
      case "SET_DIM":
        dim = clamp(Number(message.value), DIM_MIN, DIM_MAX);
        persist();
        redraw();
        break;
      case "GET_STATE":
        break; // fall through to respond with state
      default:
        return; // not ours
    }
    sendResponse(currentState());
    return true;
  });
})();
