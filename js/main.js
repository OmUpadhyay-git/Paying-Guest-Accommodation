// main.js - general behaviors
document.addEventListener('DOMContentLoaded',()=>{
  // Set current year in footers
  const ys = document.querySelectorAll('#year');
  ys.forEach(el => el.textContent = new Date().getFullYear());
});
