# YouTube No Autoplay

Chrome extension that stops YouTube videos from autoplaying. A video plays only after you click or press play.

On page load the video stays paused and shows its poster (thumbnail) where one is available.

## Install (unpacked)
1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select this folder.

## How it works
[content.js](content.js) listens for `play` events on media elements. If the page has no recent user interaction (`navigator.userActivation.isActive`), the video is paused. The first time this happens for a video, it is reset so the poster shows again.

It runs only on `www.youtube.com`. No data is collected and no network requests are made.

## Files
- [manifest.json](manifest.json) - extension manifest (MV3)
- [content.js](content.js) - the content script
- [icons/](icons) - extension icons
- [store/](store) - Chrome Web Store listing text and images
