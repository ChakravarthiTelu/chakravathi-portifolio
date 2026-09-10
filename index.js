const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const themeBtn = document.querySelector('.theme-btn');
const copyBtn = document.getElementById('copyEmail');
const toast = document.getElementById('toast');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    document.documentElement.style.setProperty('--bg', '#0d0f16');
    document.documentElement.style.setProperty('--surface', '#151823');
    document.documentElement.style.setProperty('--surface2', '#1c2030');
    document.documentElement.style.setProperty('--text', '#f4f5f8');
    document.documentElement.style.setProperty('--muted', '#a6adbd');
    document.documentElement.style.setProperty('--line', '#2b3040');
    themeBtn.textContent = '☀';
  } else {
    document.documentElement.style.setProperty('--bg', '#f7f8fc');
    document.documentElement.style.setProperty('--surface', '#fff');
    document.documentElement.style.setProperty('--surface2', '#eef1f7');
    document.documentElement.style.setProperty('--text', '#121624');
    document.documentElement.style.setProperty('--muted', '#626b7c');
    document.documentElement.style.setProperty('--line', '#dfe3eb');
    themeBtn.textContent = '☾';
  }
});

copyBtn.addEventListener('click', async () => {
  await navigator.clipboard.writeText('guruchakravrthitelu@gmail.com');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
