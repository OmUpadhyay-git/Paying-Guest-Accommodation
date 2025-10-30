// navigation.js - simple responsive nav toggle
document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  if(!btn || !nav) return;
  btn.addEventListener('click',()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    const list = nav.querySelector('.nav-list');
    if(list) list.style.display = expanded ? 'none' : 'flex';
  });
});
