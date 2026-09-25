// Número público verificado na bio do Instagram @gabyalecrimmakeup.
const phone = '5574999200997';
const greeting = 'Olá, Gaby! Gostaria de agendar um horário para maquiagem. Quais datas estão disponíveis?';
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(greeting)}`;
});
document.querySelectorAll('[data-style]').forEach(link => {
  const message = `Olá, Gaby! Gostaria de agendar um horário para maquiagem. Tenho interesse em ${link.dataset.style}. Podemos conversar sobre datas e valores?`;
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

// Animações discretas, com respeito à preferência de movimento do visitante.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.section-heading, .services article, .gallery-photo, .logo-panel, .about-copy, .contact > *').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) {
      observer.disconnect();
      document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
    }
  });
}
