// Händelsehanterare som kollar skroll i Y-axel
window.addEventListener('scroll', function() {
    const header = document.getElementById('navbar');
    const scroller = document.getElementById('scroll-up');
    header.classList.toggle('sticky', window.scrollY > 0);
    scroller.classList.toggle('show', window.scrollY > 200);
});

const navigation = document.querySelector('.navbar .menu');
const hamburger = document.querySelector('.mobile-nav');

document.querySelector('.mobile-nav').onclick = function () {
    navigation.classList.toggle('active');
    hamburger.classList.toggle('active');
};





