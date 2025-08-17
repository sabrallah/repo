// Fidugerec - JS minimal
(function(){
  const byId = (id)=>document.getElementById(id);
  const qs = (sel)=>document.querySelector(sel);

  // Year
  const y = qs('#year');
  if(y) y.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = qs('.nav-toggle');
  const nav = qs('#nav');
  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  // Contact form: client-side validation + open mailto
  const form = byId('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const nom = byId('nom');
      const email = byId('email');
      const sujet = byId('sujet');
      const message = byId('message');
      const consent = byId('consent');

      // Reset errors
      ['err-nom','err-email','err-sujet','err-message','err-consent'].forEach(id=>{const el=byId(id); if(el) el.textContent='';});

      let ok = true;
      if(!nom.value.trim()){ byId('err-nom').textContent = 'Veuillez indiquer votre nom.'; ok=false; }
      if(!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){ byId('err-email').textContent = 'Adresse email invalide.'; ok=false; }
      if(!sujet.value.trim()){ byId('err-sujet').textContent = 'Veuillez indiquer un sujet.'; ok=false; }
      if(!message.value.trim()){ byId('err-message').textContent = 'Veuillez écrire un message.'; ok=false; }
      if(!consent.checked){ byId('err-consent').textContent = 'Le consentement est requis.'; ok=false; }
      if(!ok) return;

      const body = encodeURIComponent(`${message.value}\n\n—\nNom: ${nom.value}\nTéléphone: ${byId('tel').value || ''}`);
      const subject = encodeURIComponent(`[Fidugerec] ${sujet.value}`);
      const mailto = `mailto:contact@fidugerec.example?subject=${subject}&body=${body}`;
      window.location.href = mailto;
    });
  }
})();
