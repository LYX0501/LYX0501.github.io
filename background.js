(() => {
  'use strict';
  const canvas = document.getElementById('ambient-particles');
  const context = canvas && canvas.getContext('2d');
  if (!context) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let width = 0, height = 0, points = [], frame = 0, previous = 0;
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = width < 760 ? 22 : Math.min(65, Math.round(width * height / 17000));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width, y: Math.random() * height,
      vx: (Math.random() - 0.5) * 7, vy: (Math.random() - 0.5) * 7,
      radius: 1 + Math.random() * 1.2
    }));
  }
  function draw(now) {
    frame = requestAnimationFrame(draw);
    if (now - previous < 1000 / 24) return;
    const dt = previous ? Math.min((now - previous) / 1000, 0.1) : 0;
    previous = now;
    context.clearRect(0, 0, width, height);
    for (const p of points) {
      p.x += p.vx * dt; p.y += p.vy * dt;
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      if (p.y > height + 10) p.y = -10;
    }
    for (let i = 0; i < points.length; i++) {
      const p = points[i];
      for (let j = i + 1; j < points.length; j++) {
        const q = points[j], distance = Math.hypot(p.x - q.x, p.y - q.y);
        if (distance > 165) continue;
        context.strokeStyle = `rgba(68, 139, 181, ${0.18 * (1 - distance / 165)})`;
        context.lineWidth = 0.75;
        context.beginPath(); context.moveTo(p.x, p.y); context.lineTo(q.x, q.y); context.stroke();
      }
      context.fillStyle = 'rgba(58, 135, 180, 0.30)';
      context.beginPath(); context.arc(p.x, p.y, p.radius, 0, Math.PI * 2); context.fill();
    }
  }
  function updateMotion() {
    cancelAnimationFrame(frame); previous = 0;
    const paused = reduced.matches || document.hidden;
    document.body.classList.toggle('background-paused', paused);
    if (!paused) frame = requestAnimationFrame(draw);
    else context.clearRect(0, 0, width, height);
  }
  window.addEventListener('resize', resize, { passive: true });
  document.addEventListener('visibilitychange', updateMotion);
  reduced.addEventListener('change', updateMotion);
  resize(); updateMotion();
})();
