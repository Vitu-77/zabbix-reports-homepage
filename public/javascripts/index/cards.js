
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

ZabbixSelector.addEventListener('change', (e) => {
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

    // TOTAL_CUSTOM_PRICE = innerHTMLprices[inn]

    TOTAL_CUSTOM_PRICE = innerHTMLprices[e.target.value - 2]

    customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
});

customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;

modelsRadio.addEventListener('click', (e) => {
    modelsInnerRadio.classList.toggle('__hide');
    isBoxCheckeds[0] = !isBoxCheckeds[0];

    if(isBoxCheckeds[0] === true){
        TOTAL_CUSTOM_PRICE = (Number(TOTAL_CUSTOM_PRICE) + 150).toFixed(2);
        customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
    }
    else{
        TOTAL_CUSTOM_PRICE = (Number(TOTAL_CUSTOM_PRICE) - 150).toFixed(2);
        customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
    }

    isBothBoxCheckeds();
});

reportsRadio.addEventListener('click', (e) => {
    reportsInnerRadio.classList.toggle('__hide');
    isBoxCheckeds[1] = !isBoxCheckeds[1];

    if(isBoxCheckeds[1] === true){
        TOTAL_CUSTOM_PRICE = (Number(TOTAL_CUSTOM_PRICE) + 100).toFixed(2);
        customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
    }
    else{
        TOTAL_CUSTOM_PRICE = (Number(TOTAL_CUSTOM_PRICE) - 100).toFixed(2);
        customPrice.innerHTML = `$ ${TOTAL_CUSTOM_PRICE}`;
    }

    isBothBoxCheckeds();
});

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