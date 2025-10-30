// very small lightbox implementation for images with [data-lightbox]
document.addEventListener('click', (e) => {
  const a = e.target.closest('[data-lightbox]');
  if(!a) return;
  e.preventDefault();
  const src = a.getAttribute('href') || a.querySelector('img')?.src;
  if(!src) return;
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.tabIndex = -1;
  overlay.innerHTML = `<img src="${src}" alt="" />`;
  overlay.addEventListener('click', ()=> overlay.remove());
  document.body.appendChild(overlay);
});
