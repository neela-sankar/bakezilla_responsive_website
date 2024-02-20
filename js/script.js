/* show menu */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
    
/* Menu Show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav-link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Add Blur Header */
const blurHeader = () => {
    const header = document.getElementById('header')
    //when the scroll is greather than 50 vh, add the blur
    this.scrollY >=50 ? header.classList.add('blur-header')
                      : header.classList.remove('blur-header')
}

window.addEventListener('scroll', blurHeader)

/* Scroll section active link */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Show scroll up */
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* Scroll reveal animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    opacity: 1,
    scale: 1.1,
    duration: 2500,
    delay: 300,
    //reset: true, //Animations repeat
})

sr.reveal(`.home__data, .about__img, .about__data, .visit__data`)

sr.reveal(`.home__image, .footer__img-1, .footer__img-2`, {rotate: {z: -15} })
sr.reveal(`.home__bread, .about__bread`, {rotate: {z: -15} })
sr.reveal(`.home__footer`, {scale: 1, origin: 'bottom' })

sr.reveal(`.new__card:nth-child(1) img`, {rotate: {z: -30}, distance: 0})
sr.reveal(`.new__card:nth-child(2) img`, {rotate: {z: 15}, distance: 0, delay: 600})
sr.reveal(`.new__card:nth-child(3) img`, {rotate: {z: -30}, distance: 0, delay: 900})

sr.reveal(`.favorite__card img`, {interval: 100, rotate: {z: 15}, distance: 0})
sr.reveal(`.footer__container`, {scale: 1})
