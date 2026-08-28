# YouTube Delay

A simple Firefox extension that delays opening YouTube by an adjustable amount of time and shows a full-screen white-on-black message that you can set. No buttons, no skipping — you just wait.

Built from the [Catchy Sites Delay](https://github.com/) idea, trimmed down to only YouTube with a settings popup.

### Files

* `manifest.json` — extension manifest (loads the popup and content script)
* `popup.html` / `popup.js` — toolbar popup with 2 fields: delay (seconds) and message
* `youtube-delay.js` — content script that shows the overlay on YouTube
* `icon.png` — toolbar icon

### Settings

Click the toolbar icon to open the popup, enter the delay in seconds and your message, then press **Save**. Settings persist in `browser.storage.local`.

### Installing

Works in Firefox Developer Edition / ESR with `xpinstall.signatures.required = False` in `about:config`.

To install, zip the `*.js`, `*.json`, and `*.png` files, then use **Install Add-on from File...** from the Add-ons page (`about:addons`). The file `youtube-delay.xpi` in this repository is exactly such a zip.

The delay triggers once per page load (tracked via `sessionStorage`), so navigating away and back within the same tab won't re-delay until the session/tab is closed.
