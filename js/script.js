// AOS init
AOS.init({ duration: 700, once: true });

// Navbar shrink on scroll
const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) mainNav.classList.add('scrolled');
  else mainNav.classList.remove('scrolled');
});

// Countdown
function initCountdown() {
  const wrap = document.getElementById('countdownTiles');
  if (!wrap) return;
  const target = new Date(wrap.getAttribute('data-countdown')).getTime();
  const daysEl = wrap.querySelector('[data-unit="days"]');
  const hoursEl = wrap.querySelector('[data-unit="hours"]');
  const minutesEl = wrap.querySelector('[data-unit="minutes"]');
  const secondsEl = wrap.querySelector('[data-unit="seconds"]');

  function tick() {
    const now = new Date().getTime();
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / (1000*60*60*24));
    const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
    const seconds = Math.floor((diff % (1000*60)) / 1000);
    daysEl.textContent = String(days).padStart(3,'0');
    hoursEl.textContent = String(hours).padStart(2,'0');
    minutesEl.textContent = String(minutes).padStart(2,'0');
    secondsEl.textContent = String(seconds).padStart(2,'0');
  }
  tick();
  setInterval(tick, 1000);
}
initCountdown();

// Smooth scroll for nav links (offset for fixed header)
document.querySelectorAll('.navbar .nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const id = link.getAttribute('href');
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});
