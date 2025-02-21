const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  
  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️ Lys Modus';
    localStorage.setItem('theme', 'dark'); 
  } else {
    themeToggle.textContent = '🌙 Mørk Modus';
    localStorage.setItem('theme', 'light'); 
  }
});

// Beholder mørk modus selv etter refresh
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️ Lys Modus';
}
