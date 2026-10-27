// Keep all lightweight previews playing concurrently, including offscreen cards.
document.querySelectorAll('.paper-video').forEach(video => {
  video.muted = true;
  video.autoplay = true;
  video.loop = true;
  video.playsInline = true;
  video.addEventListener('playing', () => video.classList.add('is-playing'));
  video.addEventListener('loadeddata', () => video.classList.add('is-playing'));
  const source = video.querySelector('source[data-src]');
  if (source) source.src = source.dataset.src;
  video.preload = 'auto';
  video.load();
  video.play().catch(() => {}); // Native controls remain available if autoplay is blocked.
});
