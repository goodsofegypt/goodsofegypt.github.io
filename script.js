// src/utils/scroll-lock.js
const $body = document.querySelector('body');
let scrollPosition = 0;

function start() {
    scrollPosition = window.pageYOffset;
    $body.style.overflow = 'hidden';
    $body.style.position = 'fixed';
    $body.style.top = `-${scrollPosition}px`;
    $body.style.width = '100%';
  }

document.addEventListener('DOMContentLoaded', (event) => {
	start()
    console.log('Goods of Egypt - Made in Sicily');
});