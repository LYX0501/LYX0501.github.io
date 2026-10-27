(() => {
  'use strict';
  // Pause decorative motion when the page is in the background.
  const update = () => document.body.classList.toggle('background-paused', document.hidden);
  document.addEventListener('visibilitychange', update);
  update();
})();
