const navLinks = document.querySelectorAll('nav ul li a.nav-link');
const sections = document.querySelectorAll('section');
const sectionsPositions = [];

sections.forEach(section => {
    sectionsPositions.push(section.offsetTop);
});

const setSmoothScroll = (navLink, targetPosition) => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault();

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
        });
    });
}

for (let i = 0; i < navLinks.length; i++) {

    let sectionIterator = i < 4 ? i + 1 : (i < 9 ? i - 3 : i - 8);

    setSmoothScroll(navLinks[i], sectionsPositions[sectionIterator]);
}

const gsLink = document.querySelector('#gs-link');
const faqLnk = document.querySelector('#faqLnk');

gsLink.addEventListener('click', (e) => {
    e.preventDefault();

    const targetOffsetTop = document.querySelector('#getting-started').offsetTop;

    window.scrollTo({
        top: targetOffsetTop * 0.97,
        behavior: 'smooth',
    });
})

faqLnk.addEventListener('click', (e) => {
    e.preventDefault();

    const targetOffsetTop = document.querySelector('#prices').offsetTop;

    window.scrollTo({
        top: targetOffsetTop * 0.97,
        behavior: 'smooth',
    });
});