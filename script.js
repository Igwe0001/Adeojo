const body = document.querySelector('body');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.line')
const close = document.querySelector('.close');
const bun = document.querySelectorAll('.bun');
const bunCrust = document.querySelectorAll('.bun-crust')
const link = document.querySelectorAll('.link')

hamburger.addEventListener('click', () => {
    nav.classList.toggle('switch')
    bun.forEach(e => {
        e.classList.toggle('toggle')
    })
    bunCrust.forEach(e => {
        e.classList.toggle('toggle')
    })
    link.forEach(e => {
        e.classList.toggle('toggle')
    })
})
