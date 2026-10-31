const handled = new WeakSet();

document.addEventListener(
  "play",
  (e) => {
    const m = e.target;
    if (!(m instanceof HTMLMediaElement) || navigator.userActivation.isActive) return;
    m.pause();
    if (handled.has(m)) return;
    handled.add(m);
    m.removeAttribute("autoplay");
    // Resetting via load() brings the poster back; skip MSE/blob sources, which load() would break
    if (m.poster && !m.currentSrc.startsWith("blob:")) {
      m.load();
    } else {
      m.currentTime = 0;
    }
  },
  true
);
