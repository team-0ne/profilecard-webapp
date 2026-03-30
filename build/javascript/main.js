// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const html = document.documentElement;

// Apply saved preference on page load
if (localStorage.getItem('theme') === 'dark') {
  html.classList.add('dark');
  themeIcon.textContent = '☀️';
} else {
  themeIcon.textContent = '🌙';
}

// Toggle on click
themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');

  if (html.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeIcon.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeIcon.textContent = '🌙';
  }
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}