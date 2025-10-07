/*=======taggle icon navbar  ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

 /*=======scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*=======sticky ==========*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

      /*=======remove taggle icon and navbar when click navbar link ==========*/
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');

};

/*======= scroll reveal ==========*/
ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration: 2000,
    delay:200

});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact from', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*====typed.js===*/
const typed = new Typed('.multiple-text',{
    strings: ['Binuri Nimthera','QA Engineer', 'Software Engineer', 'Project Manager', 'Business Analyst'],
    typeSpeed:60,
    backSpeed:60,
    backDelay:500,
    loop: true

});





document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".portfolio-container");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.addEventListener("click", function () {
        container.scrollBy({ left: -320, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", function () {
        container.scrollBy({ left: 320, behavior: "smooth" });
    });
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click',() => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

/*=======Theme Toggle ==========*/
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply the saved theme on page load
if (currentTheme === 'light') {
    html.classList.add('light-mode');
    themeIcon.classList.remove('bx-moon');
    themeIcon.classList.add('bx-sun');
}

// Theme toggle functionality
themeToggle.addEventListener('click', () => {
    html.classList.toggle('light-mode');
    
    // Switch icons and save preference
    if (html.classList.contains('light-mode')) {
        themeIcon.classList.remove('bx-moon');
        themeIcon.classList.add('bx-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('bx-sun');
        themeIcon.classList.add('bx-moon');
        localStorage.setItem('theme', 'dark');
    }
});




