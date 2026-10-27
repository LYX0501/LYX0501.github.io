const dialog = document.getElementById('video-dialog');
const player = document.getElementById('video-player');
const title = document.getElementById('video-title');
const external = document.getElementById('video-external');

document.querySelectorAll('.video-preview img').forEach((image) => {
  const restoreFigure = () => {
    image.removeEventListener('error', restoreFigure);
    image.src = image.dataset.fallback;
    image.closest('button').classList.add('diagram-poster');
  };
  image.addEventListener('error', restoreFigure);
  if (image.complete && image.naturalWidth === 0) restoreFigure();
});

document.querySelectorAll('.video-preview').forEach((button) => {
  button.addEventListener('click', () => {
    title.textContent = button.dataset.videoTitle;
    external.href = button.dataset.videoUrl;
    const native = button.dataset.videoKind === 'native';
    const media = document.createElement(native ? 'video' : 'iframe');
    if (native) {
      media.controls = true;
      media.playsInline = true;
      media.muted = true;
      media.autoplay = true;
      media.setAttribute('aria-label', button.dataset.videoTitle);
    } else {
      media.title = button.dataset.videoTitle;
      media.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      media.allowFullscreen = true;
      media.referrerPolicy = 'strict-origin-when-cross-origin';
    }
    media.src = button.dataset.videoSrc;
    player.replaceChildren(media);
    dialog.showModal();
  });
});

dialog.querySelector('.video-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right ||
      event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  const video = player.querySelector('video');
  if (video) video.pause();
  player.replaceChildren();
});
