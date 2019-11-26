const rowsHeader = document.querySelectorAll('.row-header');
const dropdownItems = document.querySelectorAll('.dropdown-items');
const plusIcons = document.querySelectorAll('.plus-icon .y');

rowsHeader[0].addEventListener('click', () => {
    dropdownItems[0].classList.toggle('hide-dropdown');
    dropdownItems[1].classList.add('hide-dropdown');
    dropdownItems[2].classList.add('hide-dropdown');
    plusIcons[0].classList.toggle('change-icon');

    plusIcons[1].classList.remove('change-icon');
    plusIcons[2].classList.remove('change-icon');
});

rowsHeader[1].addEventListener('click', () => {
    dropdownItems[1].classList.toggle('hide-dropdown');
    dropdownItems[0].classList.add('hide-dropdown');
    dropdownItems[2].classList.add('hide-dropdown');
    plusIcons[1].classList.toggle('change-icon');

    plusIcons[0].classList.remove('change-icon');
    plusIcons[2].classList.remove('change-icon');
});

rowsHeader[2].addEventListener('click', () => {
    dropdownItems[2].classList.toggle('hide-dropdown');
    dropdownItems[0].classList.add('hide-dropdown');
    dropdownItems[1].classList.add('hide-dropdown');
    plusIcons[2].classList.toggle('change-icon');

    plusIcons[1].classList.remove('change-icon');
    plusIcons[0].classList.remove('change-icon');
});