const navLinks = document.querySelectorAll('nav ul li a');
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

for(let i = 0; i < navLinks.length; i++){
    
    let sectionIterator = i < 5 ? i + 1 : (i < 10 ? i - 4 : i - 9);

    setSmoothScroll(navLinks[i], sectionsPositions[sectionIterator]);
}