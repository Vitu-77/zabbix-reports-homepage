const get = (reference) => document.querySelector(reference);
const getAll = (reference) => document.querySelectorAll(reference);

const animate = () => {
    const features = get('section#about');
    const featuresOffsetTop = Math.floor(features.offsetTop * 0.5);

    const prices = get('section#prices');
    const pricesOffsetTop = Math.floor(prices.offsetTop * 0.65);

    const videos = get('section#video');
    const videosOffsetTop = Math.floor(videos.offsetTop * 0.76);

    const gettingStarted = get('div#getting-started');
    const gettingStartedOffsetTop = Math.floor(gettingStarted.offsetTop * 0.85);

    const contact = get('section#contact');
    const contactOffsetTop = Math.floor(contact.offsetTop * 0.9);

    // features-animation
    if (window.scrollY >= featuresOffsetTop) {

        const featuresTitle = get('.features .subtitle-container h2');
        const featureCards = getAll('.feature-cards article');

        const aboutTimeline = new TimelineMax();

        aboutTimeline
            .to(featuresTitle, .8, {
                marginLeft: 0,
                opacity: 1,
            })
            .to(featureCards[0], .4, {
                marginLeft: 0,
                opacity: 1,
            })
            .to(featureCards[1], .4, {
                marginLeft: 0,
                opacity: 1,
            })
            .to(featureCards[2], .4, {
                marginLeft: 0,
                opacity: 1,
            })
            .to(featureCards[3], .6, {
                marginLeft: 0,
                opacity: 1,
            })
    }

    //prices-animation
    if (window.scrollY >= pricesOffsetTop) {
        const startFree = get('article.prices .subtitle-container h2 span#fc');
        const payOnly = get('article.prices .subtitle-container h2 span#lc');
        const priceCards = getAll('div.price-card');
        const texts = getAll('div.small div');

        const pricesTimeline = new TimelineMax();

        pricesTimeline
            .to(startFree, .6, {
                opacity: 1,
                marginLeft: 0
            })
            .to(payOnly, .6, {
                opacity: 1,
                marginLeft: 0
            })
            .to(priceCards[2], .4, {
                marginBottom: 0,
                opacity: 1,
            })
            .to(priceCards[0], .4, {
                marginBottom: 0,
                opacity: 1,
            })
            .to(priceCards[1], .5, {
                marginBottom: 0,
                opacity: 1,
            })
            .to(texts[0], .4, {
                transform: 'translateX(0)',
                opacity: 1,
            })
            .to(texts[1], .4, {
                opacity: 1,
            })
            .to(texts[2], .6, {
                opacity: 1,
            })
    }

    //videos-animation
    if (window.scrollY >= videosOffsetTop) {
        const videoTitle = get('article.demo-video .subtitle-container h2');
        const video = get('.video-container iframe');

        const videoTimeline = new TimelineMax();

        videoTimeline
            .to(videoTitle, .6, { 
                opacity: 1,
                marginLeft: 0,
            })
            .to(video, .8, { opacity: 1 })
    }

    //gettingStarted-animation
    if (window.scrollY >= gettingStartedOffsetTop){
        const rocket = get('#rocket');
        const subTitle = get('.getting-started .subtitle-container h2');
        const text = get('.getting-started .content .content-right');

        const gettingStartedTimeline = new TimelineMax();

        gettingStartedTimeline
            .to(rocket, .6, {
                marginBottom: 0,
                opacity: 1
            })
            .to(subTitle, .4, {
                marginBottom: 0,
                opacity: 1,
            })
            .to(text, .8, {
                opacity: 1,
                marginBottom: 0
            })
    }

    //contact-animation
    if (window.scrollY >= contactOffsetTop) {
        const faqTitle = get('article.faq h2');
        const dropdownItems = getAll('article.faq div.dropdown div.row');
    
        const formTitle = get('.contact-form h2');
        const form = get('.contact-form form');
        const formSubtitle = get('.contact-form h3');
        const formButton = get('.contact-form button');

        const contactTimeline = new TimelineMax();

        contactTimeline
            .to(faqTitle, .4, { 
                marginLeft: 0,
                opacity: 1
            })
            .to(dropdownItems[0], .3, {
                marginLeft: 0,
                opacity: 1
            })
            .to(dropdownItems[1], .3, {
                marginLeft: 0,
                opacity: 1
            })
            .to(dropdownItems[2], .3, {
                marginLeft: 0,
                opacity: 1
            })
            .to(formTitle, .4, { 
                opacity: 1,
                marginLeft: 0
            })
            .to(formSubtitle, .4, { opacity: 1 })
            .to(form, .2, { opacity: 1 })
            .to(formButton, .1, { opacity: 1 })
    }
}

window.onload = () => {
    const logo = get('div.logo');
    const menu = get('header nav');
    const homeContentTitle = get('div.text-content h2');
    const homeContentParagraph = get('div.text-content p');
    const homeContentButton = get('div.text-content a');
    const homeContentImg = get('div.home-content-right img');

    const homeTileline = new TimelineMax();

    homeTileline
        .to(logo, .4, { transform: 'translateX(0)' })
        .to(menu, .4, { transform: 'translateX(0)' })
        .to(homeContentTitle, .2, { opacity: 1 })
        .to(homeContentParagraph, .2, { opacity: 1 })
        .to(homeContentButton, .2, { marginLeft: 0 })
        .to(homeContentImg, 1.2, { opacity: 1, ease: Back.easeOut.config(1.7), x: -15 });

    animate();
}

window.addEventListener('scroll', () => {
    animate();
});