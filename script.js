const buttonMenu = document.querySelector('.button-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu')
const bgMenuActive = document.querySelector('.background');

buttonMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('active-menu');
    buttonMenu.classList.add('disable');
    bgMenuActive.classList.remove('disable')
    menu.classList.remove('disable')
    buttonMenu.classList.remove('active-menu')
})

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('active-menu');
    buttonMenu.classList.remove('disable');
    bgMenuActive.classList.add('disable')
    menu.classList.add('disable')
    buttonMenu.classList.add('active-menu')
})
