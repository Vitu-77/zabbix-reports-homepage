const showMobileMenuBtn = document.querySelector('#show-mobile-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const effect = document.querySelector('#effect');
const body = document.querySelector('body');

const mobileMenuLinks = document.querySelectorAll('.mobile-menu ul li a');

mobileMenuLinks.forEach((mobileMenuLink) => {
    mobileMenuLink.addEventListener('click', () => {
        mobileMenu.classList.remove('show-menu');
        mobileMenu.classList.add('hide-menu');

        effect.classList.toggle('show-effect');
        effect.classList.toggle('hide-effect');

        body.classList.toggle('hide-overflow');
    });
});

showMobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hide-menu');
    mobileMenu.classList.toggle('show-menu');

    effect.classList.toggle('hide-effect');
    effect.classList.toggle('show-effect');

    body.classList.toggle('hide-overflow');
});

effect.addEventListener('click', () => {
    mobileMenu.classList.remove('show-menu');
    mobileMenu.classList.add('hide-menu');

    effect.classList.toggle('show-effect');
    effect.classList.toggle('hide-effect');

    body.classList.toggle('hide-overflow');
});

window.onscroll = ( ) => {
    mobileMenu.classList.remove('show-menu');
    mobileMenu.classList.add('hide-menu');

    effect.classList.remove('show-effect');
    effect.classList.add('hide-effect');

    body.classList.remove('hide-overflow');
}