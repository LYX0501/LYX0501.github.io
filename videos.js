(() => {
  const videos = [...document.querySelectorAll('.paper-video')];
  const state = new Map(videos.map(video => [video, { ratio: 0, loaded: false, failed: false }]));
  const narrow = matchMedia('(max-width: 760px)');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const connection = navigator.connection;
  let timer, pending = null;
  const limit = () => narrow.matches || connection?.saveData ? 1 : 2;
  const schedule = () => { clearTimeout(timer); timer = setTimeout(update, 220); };

  function finish(video) {
    if (pending !== video) return;
    clearTimeout(state.get(video).timeout);
    pending = null;
    schedule();
  }
  function release(video) {
    const info = state.get(video);
    video.pause();
    video.classList.remove('is-playing');
    if (!info.loaded) return;
    finish(video);
    video.querySelector('source').removeAttribute('src');
    video.load(); // Abort offscreen transfers and release the decoder.
    info.loaded = false;
  }
  function start(video) {
    const info = state.get(video);
    if (info.loaded) {
      if (video.paused) video.play().catch(error => { if (error.name === 'NotAllowedError') info.blocked = true; });
      return;
    }
    if (pending) return; // Start one new download at a time.
    pending = video;
    info.loaded = true;
    video.querySelector('source').src = video.querySelector('source').dataset.src;
    video.preload = 'auto';
    video.load();
    info.timeout = setTimeout(() => finish(video), 12000);
    video.play().catch(error => { if (error.name === 'NotAllowedError') info.blocked = true; finish(video); });
  }
  function update() {
    if (document.hidden) { videos.forEach(release); return; }
    const candidates = videos.filter(video => {
      const info = state.get(video);
      return info.ratio >= .15 && !info.failed && !info.blocked && (!reduced.matches || info.manual);
    }).sort((a, b) => state.get(b).ratio - state.get(a).ratio);
    const selected = new Set(candidates.slice(0, limit()));
    videos.forEach(video => { if (!selected.has(video)) release(video); });
    selected.forEach(start);
  }
  videos.forEach(video => {
    video.autoplay = false; // The visibility scheduler owns autoplay.
    video.muted = true;
    video.addEventListener('canplay', () => finish(video));
    video.addEventListener('playing', () => {
      if (document.hidden || state.get(video).ratio < .15) { release(video); return; }
      video.classList.add('is-playing');
      finish(video);
    });
    video.addEventListener('error', () => { state.get(video).failed = true; release(video); schedule(); });
    // Native controls remain usable when autoplay is blocked or motion is reduced.
    video.addEventListener('pointerdown', () => {
      const info = state.get(video);
      info.manual = true; info.failed = false; info.blocked = false;
      schedule();
    });
    video.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        state.get(video).manual = true; state.get(video).failed = false; state.get(video).blocked = false; schedule();
      }
    });
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target: video, intersectionRatio }) => {
        const info = state.get(video);
        info.ratio = intersectionRatio;
        if (intersectionRatio < .15) { release(video); info.failed = false; }
      });
      schedule();
    }, { threshold: [0, .15, .35, .6, .85, 1] });
    videos.forEach(video => observer.observe(video));
  } else {
    const measure = () => {
      videos.forEach(video => {
        const rect = video.getBoundingClientRect();
        state.get(video).ratio = Math.max(0, Math.min(rect.bottom, innerHeight) - Math.max(rect.top, 0)) / Math.max(rect.height, 1);
      });
      schedule();
    };
    addEventListener('scroll', measure, { passive: true });
    addEventListener('resize', measure); measure();
  }
  // Do not download cards merely passed during smooth anchor navigation.
  addEventListener('scroll', schedule, { passive: true });
  addEventListener('resize', schedule);
  document.addEventListener('visibilitychange', () => { if (document.hidden) videos.forEach(release); else schedule(); });
  addEventListener('pagehide', () => videos.forEach(release));
  addEventListener('pageshow', schedule);
  reduced.addEventListener('change', schedule);
})();
