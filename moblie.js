const toggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

toggle.addEventListener('click', () => {
  navList.classList.toggle('show');
});
