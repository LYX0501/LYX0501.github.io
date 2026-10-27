(() => {
  'use strict';
  const list = document.querySelector('.news-list');
  if (!list || list.children.length <= 6) return;
  const visibleItems = Array.from(list.children).slice(0, 6);
  const fitSixItems = () => {
    const style = getComputedStyle(list);
    const height = visibleItems.reduce((sum, item) => sum + item.getBoundingClientRect().height, 0)
      + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom)
      + parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    list.style.setProperty('--news-visible-height', `${Math.ceil(height)}px`);
  };
  const observer = new ResizeObserver(fitSixItems);
  visibleItems.forEach(item => observer.observe(item));
  fitSixItems();
  document.fonts.ready.then(fitSixItems);
})();
