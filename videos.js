// Defer the video transfer until its card approaches the viewport.
const loadDemo = (video) => {
  const source = video.querySelector('source[data-src]');
  if (!source) return;
  source.src = source.dataset.src;
  delete source.dataset.src;
  video.muted = true;
  video.load();
  video.play().catch(() => {}); // Native controls remain available if autoplay is blocked.
};

const demos = document.querySelectorAll('.paper-video');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      loadDemo(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '200px 0px' });
  demos.forEach((video) => observer.observe(video));
} else {
  demos.forEach(loadDemo);
}
