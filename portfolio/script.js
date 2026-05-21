/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#mobile-menu');
let navbar = document.querySelector('.nav-list');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Note: using simple toggle logic, icon change handled by CSS if needed or just simple toggle
    navbar.classList.toggle('active');
};

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Typed JS */
const typed = new Typed('.typing-text', {
    strings: ['Web Developer', 'Frontend Designer', 'Freelancer', 'Programming Mentor', 'WordPress Developer', 'Laravel Developer',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
