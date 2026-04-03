/* ============================================================
   PORTFOLIO — SHARED JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── MOBILE MENU ── */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const spans = hamburger.querySelectorAll('span');
      if (mobileMenu.classList.contains('open')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  /* ── ACTIVE NAV LINK ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === currentPage || (currentPage === '' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  /* ── SCROLL FADE-IN ── */
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    scrollObserver.observe(el);
  });

  /* ── CONTACT FORM ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-submit');
      const original = btn.textContent;
      btn.textContent = 'Message Sent ✓';
      btn.style.background = '#2d6a4f';
      btn.style.borderColor = '#2d6a4f';
      btn.style.color = '#fff';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = original;
        btn.style.background = '';
        btn.style.borderColor = '';
        btn.style.color = '';
        btn.disabled = false;
        contactForm.reset();
      }, 3500);
    });
  }

});

/* ── SCROLL REVEAL CSS INJECTION ── */
const style = document.createElement('style');
style.textContent = `
  .scroll-reveal {
    opacity: 0;
    transform: translateY(22px);
    transition: opacity 0.55s ease, transform 0.55s ease;
  }
  .scroll-reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .scroll-reveal:nth-child(2) { transition-delay: 0.08s; }
  .scroll-reveal:nth-child(3) { transition-delay: 0.16s; }
  .scroll-reveal:nth-child(4) { transition-delay: 0.24s; }
  .scroll-reveal:nth-child(5) { transition-delay: 0.32s; }
  .scroll-reveal:nth-child(6) { transition-delay: 0.40s; }
`;
document.head.appendChild(style);
