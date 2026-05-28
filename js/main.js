// Fade-in animation on scroll
const fadeElements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });
fadeElements.forEach(el => observer.observe(el));

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Contact form - Formspree async submit
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const data = new FormData(this);
    const msg = document.getElementById('formSuccess');
    try {
      const res = await fetch(this.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        this.reset();
        msg.style.cssText = 'display:block !important; color:#4ade80; margin-top:1rem; text-align:center; font-weight:600;';
        msg.textContent = 'Message sent successfully!';
        setTimeout(() => { msg.style.cssText = 'display:none !important;'; }, 4000);
      } else {
        throw new Error('failed');
      }
    } catch {
      msg.style.cssText = 'display:block !important; color:red; margin-top:1rem; text-align:center; font-weight:600;';
      msg.textContent = 'Error sending message. Please try again.';
    }
  });
}

// Service card click → fill contact form subject
document.querySelectorAll('.service-card[data-service]').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById('contactSubject').value = 'Order: ' + card.dataset.service;
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  });
});
