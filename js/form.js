// form.js - simple front-end validation and fake submit
document.addEventListener('DOMContentLoaded',()=>{
  const form = document.getElementById('contactForm');
  if(!form) return;
  const msg = document.getElementById('formMsg');
  form.addEventListener('submit',(ev)=>{
    ev.preventDefault();
    const fd = new FormData(form);
    if(!fd.get('name') || !fd.get('email') || !fd.get('message')){
      msg.textContent = 'Please fill all fields.';
      msg.style.color = 'crimson';
      return;
    }
    msg.textContent = 'Sending...';
    msg.style.color = 'inherit';
    // simulate async submit
    setTimeout(()=>{
      msg.textContent = 'Message sent — we will get back to you soon.';
      form.reset();
    },800);
  });
});
