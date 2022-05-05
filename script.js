const body = document.querySelector('body');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
    nav.style.width = '40%';
    body.style.marginRight = '40%';
    hamburger.style.display = 'none';
})

close.addEventListener('click', () => {
     nav.style.width = '0';
    body.style.marginRight = '0';
    hamburger.style.display = 'block';
})
