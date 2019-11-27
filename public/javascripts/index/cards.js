const cards = document.querySelectorAll('div.price-card');
const payPalButton = document.querySelector('#pay-pal-btn');

for(let i = 0; i < cards.length; i++){
    cards[i].addEventListener('click', (e) => {
        const selectedCard = e.target.id;

        switch(selectedCard){
            case 'alone': payPalButton.attributes.href = 'link1';
            break;
            case 'customize': payPalButton.attributes.href = 'link2';
            break;
            case 'reseller': payPalButton.attributes.href = 'link3';
            break;
            default: return
        }

        console.log(payPalButton.attributes.href);

        for(let i = 0;i < cards.length; i++){
            cards[i].classList.remove('selected-card');
        }
        cards[i].classList.toggle('selected-card');
    });
}

const cardBtn = document.querySelector('.card-btn');

cardBtn.addEventListener('click', () => console.log('ASXAASXASXASX'));