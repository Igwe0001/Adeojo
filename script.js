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
// const imgtargets = document.querySelectorAll(".image");  
const gallary = document.querySelectorAll('.image')
let latestOpenImg;
let windowWidth = window.innerWidth

const headerHeight = header.getBoundingClientRect().height
// console.log(main);


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


//Image viwer

if (gallary) {
    gallary.forEach(function(image, index) {
        image.addEventListener('click', () => {
            let getElementCss = window.getComputedStyle(image)
            let getFullImageurl = getElementCss.getPropertyValue("background-image");
            let getimgUrlPos = getFullImageurl.split("/ade/thumbs/")
            let setNewImage = getimgUrlPos[1].replace('")', '');

            latestOpenImg = index + 1;

            let container = document.body;
            let newImageWindow = document.createElement("div")
            container.appendChild(newImageWindow)
            newImageWindow.setAttribute("class", "img-window");
            newImageWindow.setAttribute("onclick", "closeImg()");

            let newImg = document.createElement("img");
            newImageWindow.appendChild(newImg)
            newImg.setAttribute("src", "ade/" + setNewImage)
        })
    })
}

function closeImg() {
    document.querySelector('.img-window').remove()
}















