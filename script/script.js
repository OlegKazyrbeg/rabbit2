//modalWindow
let modalBlock = document.getElementById('wrapper-window');
let btnOpen = document.getElementById('open');
let btnClose = document.getElementById('close');
let btnOpenModal = document.querySelector('.menu-wrapper_button_burger')
let btnDoctor = document.querySelectorAll('.card__doctor__btn')

btnOpen.onclick = function(){
    modalBlock.classList.toggle('wrapper-window__active')
}

btnDoctor.forEach(item =>{
    item.onclick = function(){
        modalBlock.classList.toggle('wrapper-window__active')
    }
})

btnOpenModal.onclick = function(){
    modalBlock.classList.toggle('wrapper-window__active')
}

btnClose.onclick = function(){
    modalBlock.classList.remove('wrapper-window__active')
}








//scrollEffect
const hiText = ScrollReveal({
    distance: '150px',
    duration: 3000,
    delay: 450,
    reset: false
})
hiText.reveal('.hi-info', {delay:400, origin:'left'})

const hiImage = ScrollReveal({
    distance: '50px',
    duration: 2500,
    delay: 450,
    reset: false
})
hiImage.reveal('.hi-image', {delay:200, origin:'right'})

const callWin = ScrollReveal({
    distance: '50px',
    duration: 2000,
    delay: 450,
    reset: true
})
callWin.reveal('.back-call', {delay:200, origin: 'bottom'})



// menu

let menuOpen = document.querySelector('.menu-open')
let menuClose = document.querySelector('.menu-close')


menuOpen.onclick = function(){
    let navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show-menu');
    

    let lock = document.getElementById('body')
    lock.classList.toggle('lock');
}

menuClose.onclick = function(){
    let navMenu = document.querySelector('.nav-menu');
    navMenu.classList.remove('show-menu');


    let lock = document.getElementById('body')
    lock.classList.remove('lock');
}