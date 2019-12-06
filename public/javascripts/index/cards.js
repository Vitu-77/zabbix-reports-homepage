
// alone card
const alonePrice = document.querySelector('#alone-price');
const aloneInput = document.querySelector('#alone-input');

aloneInput.addEventListener('change', (e) => {
    const prices = [12];
    const innerHTMLprices = [];

    for (let i = 0; i < e.target.value; i++) {
        var newPrice = prices[i] * 0.95;
        prices.push(newPrice);
        const NEW_PRICE = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
        innerHTMLprices.push(NEW_PRICE.toFixed(2));
    }

    alonePrice.innerHTML = `$ ${innerHTMLprices[e.target.value - 2]}`;
});

// custom card
const modelsRadio = document.querySelector('#models-radio');
const reportsRadio = document.querySelector('#reports-radio');
const modelsInnerRadio = document.querySelector('#models-inner-radio');
const reportsInnerRadio = document.querySelector('#reports-inner-radio');
const isBoxCheckeds = [false, false];
const customPrice = document.querySelector('#custom-price');

const ZabbixSelector = document.querySelector('#zabbix-selector');
const modelsSelector = document.querySelector('#models-selector');
const reportsSelector = document.querySelector('#reports-selector');

var TOTAL_CUSTOM_PRICE = 128.25;
var CURRENT_PRICE = TOTAL_CUSTOM_PRICE;

var REDUCED_VALUES = [
    Number(TOTAL_CUSTOM_PRICE * 0.95).toFixed(2),
    Number(TOTAL_CUSTOM_PRICE * 0.9).toFixed(2),
    Number(TOTAL_CUSTOM_PRICE * 0.6).toFixed(2),
];

const customSelect = document.querySelector('#custom-sel');
const off = document.querySelector('.off');

ZabbixSelector.addEventListener('change', (e) => {

    customSelect.value = '1';
    off.innerHTML = ''

    modelsSelector.innerHTML = ZabbixSelector.value;
    reportsSelector.innerHTML = ZabbixSelector.value * 2;

    const prices = [128.25];
    const innerHTMLprices = [];

    for (let i = 0; i < e.target.value; i++) {
        var newPrice = prices[i] * 0.95;
        prices.push(newPrice);
        const NEW_PRICE = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
        innerHTMLprices.push(NEW_PRICE.toFixed(2));
    }

    TOTAL_CUSTOM_PRICE = innerHTMLprices[e.target.value - 2];

    REDUCED_VALUES[0] = Number(TOTAL_CUSTOM_PRICE) * 0.95;
    REDUCED_VALUES[1] = Number(TOTAL_CUSTOM_PRICE) * 0.9;
    REDUCED_VALUES[2] = Number(TOTAL_CUSTOM_PRICE) * 1;

    customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
});

customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;

modelsRadio.addEventListener('click', (e) => {

    customSelect.value = '1';
    off.innerHTML = ''

    modelsInnerRadio.classList.toggle('__hide');
    isBoxCheckeds[0] = !isBoxCheckeds[0];

    if (isBoxCheckeds[0] === true) {

        document.querySelector('#mods').style.opacity = .6;

        TOTAL_CUSTOM_PRICE = (Number(TOTAL_CUSTOM_PRICE) + 60).toFixed(2);

        REDUCED_VALUES[0] = Number(TOTAL_CUSTOM_PRICE) * 0.95;
        REDUCED_VALUES[1] = Number(TOTAL_CUSTOM_PRICE) * 0.9;
        REDUCED_VALUES[2] = Number(TOTAL_CUSTOM_PRICE) * 1;

        customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
    }
    else {

        document.querySelector('#mods').style.opacity = 1;

        TOTAL_CUSTOM_PRICE = (Number(TOTAL_CUSTOM_PRICE) - 60).toFixed(2);

        REDUCED_VALUES[0] = Number(TOTAL_CUSTOM_PRICE) * 0.95;
        REDUCED_VALUES[1] = Number(TOTAL_CUSTOM_PRICE) * 0.9;
        REDUCED_VALUES[2] = Number(TOTAL_CUSTOM_PRICE) * 1;

        customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
    }

    isBothBoxCheckeds();
});

reportsRadio.addEventListener('click', (e) => {

    customSelect.value = '1';
    off.innerHTML = ''

    reportsInnerRadio.classList.toggle('__hide');
    isBoxCheckeds[1] = !isBoxCheckeds[1];

    if (isBoxCheckeds[1] === true) {

        document.querySelector('#reps').style.opacity = .6;

        TOTAL_CUSTOM_PRICE = (Number(TOTAL_CUSTOM_PRICE) + 35).toFixed(2);

        REDUCED_VALUES[0] = Number(TOTAL_CUSTOM_PRICE) * 0.95;
        REDUCED_VALUES[1] = Number(TOTAL_CUSTOM_PRICE) * 0.9;
        REDUCED_VALUES[2] = Number(TOTAL_CUSTOM_PRICE) * 1;

        customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
    }
    else {

        document.querySelector('#reps').style.opacity = 1;

        TOTAL_CUSTOM_PRICE = (Number(TOTAL_CUSTOM_PRICE) - 35).toFixed(2);

        REDUCED_VALUES[0] = Number(TOTAL_CUSTOM_PRICE) * 0.95;
        REDUCED_VALUES[1] = Number(TOTAL_CUSTOM_PRICE) * 0.9;
        REDUCED_VALUES[2] = Number(TOTAL_CUSTOM_PRICE) * 1;

        customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
    }

    isBothBoxCheckeds();
});

var customSelectValue = customSelect.value;

customSelect.addEventListener('change', (e) => {
    const changedValue = e.target.value;

    if (changedValue == 1) {
        customPrice.innerHTML = `$ ${Number(REDUCED_VALUES[2]).toFixed(2)}`;
        off.innerHTML = '';
    }

    if (changedValue == 3) {
        customPrice.innerHTML = `$ ${Number(REDUCED_VALUES[0]).toFixed(2)}`;
        off.style.fontSize = '7px';
        off.style.marginLeft = '-1px';
        off.innerHTML = '5% FREE';
    }

    if (changedValue == 6) {
        customPrice.innerHTML = `$ ${Number(REDUCED_VALUES[1]).toFixed(2)}`;
        off.style.marginLeft = '0px';
        off.innerHTML = '10% FREE';
    }

    if (changedValue == 12) {
        customPrice.innerHTML = `$ ${Number(REDUCED_VALUES[2]).toFixed(2)}`;
        off.style.marginLeft = '-20px';
        off.style.fontSize = '7px';
        off.innerHTML = '1 MOUTH FREE';
    }
})

isBothBoxCheckeds = () => {

    const customVhost = document.querySelector('#hidden-vhost');

    if (isBoxCheckeds[0] === true && isBoxCheckeds[1] === true) {
        customVhost.classList.toggle('__hide');
    }
    else {
        customVhost.classList.add('__hide');
    }
}

//reseller card
const resellerPrice = document.querySelector('#reseller-price');
const resellerSelect = document.querySelector('#reseller-sel');
const resellerOff = document.querySelector('#reseller-off');

var defaultResellerPrice = 1100;

resellerSelect.addEventListener('change', (e) => {

    const val = e.target.value;

    switch (val) {
        case '1':
            resellerPrice.innerHTML = `$ ${defaultResellerPrice}`;
            resellerOff.innerHTML = '';
            break;
        case '3':
            resellerPrice.innerHTML = `$ ${Number(defaultResellerPrice * 0.95).toFixed(2)}`;
            resellerOff.style.fontSize = '7px';
            resellerOff.style.marginLeft = '-1px';
            resellerOff.innerHTML = '5% FREE';
            break;
        case '6':
            resellerPrice.innerHTML = `$ ${Number(defaultResellerPrice * 0.9).toFixed(2)}`;
            resellerOff.innerHTML = '10% FREE';
            break;
        case '12':
            resellerPrice.innerHTML = `$ ${defaultResellerPrice}`;
            resellerOff.style.marginLeft = '-20px';
            resellerOff.style.fontSize = '7px';
            resellerOff.innerHTML = '1 MOUTH FREE';
            break;
        default: return;
    }
})