$(document).ready(function(){
    $('.main__slider-holder').slick({
        infinite: true,
        centerMode: true,
        centerPadding: 30,
        prevArrow: '.slider-button-prev',
        nextArrow: '.slider-button-next',
    });

    const burger = document.querySelector('.header__burger');
    const closer = document.querySelector('.header__closer');
    const menu = document.querySelector('.header__mobile-menu');
    const header = document.querySelector('.header');
    const main = document.querySelector('.main');
    const bg = document.querySelector('.overlay');

    burger.addEventListener('click', () => {
        burger.classList.add('hide');
        closer.classList.add('active');
        menu.classList.add('active');
        header.classList.add('active');
        main.classList.add('active');
        bg.classList.add('active');
    })
    
    closer.addEventListener('click', () => {
        burger.classList.remove('hide');
        closer.classList.remove('active');
        menu.classList.remove('active');
        header.classList.remove('active');
        main.classList.remove('active');
        bg.classList.remove('active');
    })
});
