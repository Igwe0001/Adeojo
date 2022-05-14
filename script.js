const body = document.querySelector('body');
const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const lines = document.querySelectorAll('.line')
const close = document.querySelector('.close');
const bun = document.querySelectorAll('.bun');
const bunCrust = document.querySelectorAll('.bun-crust')
const link = document.querySelectorAll('.link');
const header = document.querySelector('header');
const main = document.querySelector('main')
const imgtargets = document.querySelectorAll(".image");  


const headerHeight = header.getBoundingClientRect().height
console.log(main);


//Navigation Control
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


//Sticky Header With Intersection Observer

/*
const obsCallBack = function (entries) {
    const [entry] = entries;
    console.log(entries)
    // header.classList.add('sticky');

    // if (entry.isIntersecting === false) header.classList.add('sticky')
    // else header.classList.remove('sticky')
    if (entry.isIntersecting === false) {
        console.log('add sticky')
        header.classList.add('sticky')
        console.log(header.scrollHeight);
    } else {
        console.log('rem0ve sticky ');
        header.classList.remove('sticky')
        console.log(header.scrollHeight);

    }
}



const obsOption = {
    root: null,
    threshold: 0,
    rootMargin: `-${headerHeight}px`
}

const observer = new IntersectionObserver(obsCallBack, obsOption)
observer.observe(header)

*/

//Header Sticky Scroll height
window.addEventListener('scroll', () => {
    window.scrollY > 0
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
        
        
}) 


//Lazy Loading Images

















