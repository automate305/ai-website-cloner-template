# Mouse Spotlight — Chrome Extension

A presenter's spotlight for the browser. Dims the current page and keeps a bright
circle around your cursor so your audience follows exactly where you're pointing.

Web port of [zhangchen0514/MouseSpotlight](https://github.com/zhangchen0514/MouseSpotlight)
(a Windows desktop app) — reworked as a browser extension so it works on **any website**.

## Install (Load Unpacked — no build, no Web Store needed)

1. Open Chrome and go to `chrome://extensions`
2. Turn on **Developer mode** (toggle, top-right)
3. Click **Load unpacked**
4. Select this `mouse-spotlight-extension` folder
5. (Optional) Pin it: click the puzzle-piece icon in the toolbar, then the pin next to "Mouse Spotlight"

Works the same way in Edge and Brave (`edge://extensions`, `brave://extensions`).

## Use

**Click the toolbar button** to open the control panel:

- **Turn On / Turn Off** button
- **Size** — `−` / `+` buttons
- **Dim strength** — slider (50%–98%) to control how dark the rest of the page goes

Or skip the panel entirely with keyboard shortcuts:

- **Toggle on/off:** **Ctrl+Shift+L** (**⌘+Shift+L** on Mac). A red **ON** badge shows when active.
- While active:
  | Key | Action |
  |-----|--------|
  | `Z` | Bigger spotlight |
  | `X` | Smaller spotlight |
  | `A` | Narrower (more oval) |
  | `S` | Wider |
  | `W` | Reset size + shape |
  | `Esc` | Turn spotlight off |

Your last size, shape, and dim strength are remembered between pages and sessions.

## Notes & limits

- Chrome blocks extensions from running on a few special pages — `chrome://` pages,
  the Chrome Web Store, and other browsers' internal pages. The spotlight won't
  appear there; that's a browser restriction, not a bug.
- The spotlight is scoped to the page content of the active tab (not the browser
  chrome / toolbar), which is as far as any extension is allowed to reach.
- If the toolbar shortcut is ever taken by another extension, change it at
  `chrome://extensions/shortcuts`.
