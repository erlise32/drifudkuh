const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
const menus = document.querySelectorAll('.list');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

menus.forEach((menus) => {
  menus.addEventListener('click', () => {
    const menu = document.querySelector('#menu');
    menu.classList.toggle('hidden');
  });
});

const boxicons = require('boxicons/css/boxicons.min.css');
