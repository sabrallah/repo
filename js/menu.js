// Mobile menu toggle behavior
document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.mobile-menu-toggle');
  toggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const nav = btn.closest('nav').querySelector('.nav-links');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      btn.classList.toggle('open');
      if (nav) nav.classList.toggle('mobile-menu-open');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const openBtn = document.querySelector('.mobile-menu-toggle.open');
    const openNav = document.querySelector('.nav-links.mobile-menu-open');
    if (openBtn && openNav) {
      const withinNav = openNav.contains(e.target) || openBtn.contains(e.target);
      if (!withinNav) {
        openBtn.classList.remove('open');
        openBtn.setAttribute('aria-expanded', 'false');
        openNav.classList.remove('mobile-menu-open');
      }
    }
  });
});
