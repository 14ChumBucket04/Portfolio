// Sticky header on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle menu icon and navbar on click
const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu when scrolling
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ScrollReveal initialization
const sr = ScrollReveal({
    distance: '25px',
    duration: 250,
    reset: true
});

// Reveal animations for specific elements
sr.reveal('.home-text', { delay: 190, origin: 'bottom' });
sr.reveal('.about, .services, .portfolio, .contact', { delay: 200, origin: 'bottom' });
