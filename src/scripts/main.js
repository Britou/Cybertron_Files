const swiper = new Swiper('.swiper', {

    
    direction: 'horizontal',
    loop: true,
    
    autoplay: {
    delay: 6000,
    },

    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    scrollbar: {
    el: '.swiper-scrollbar',
    },
});

function ocultaElementosDoHeader () {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader () {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}

document.querySelectorAll('.curiosities__toggle').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.curiosities__card');
        const fullText = card.querySelector('.curiosities__full');

        const isHidden = fullText.classList.contains('is-hidden');

        fullText.classList.toggle('is-hidden');
        card.classList.toggle('is-expanded');

        button.textContent = isHidden ? 'Ver menos' : 'Ver mais';
    });
});

document.querySelector('.header__menu-toggle').addEventListener('click', () => {
    const links = document.querySelector('.header__links:last-child');
    links.classList.toggle('is-active');
});