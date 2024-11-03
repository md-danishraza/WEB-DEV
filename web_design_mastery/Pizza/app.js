const toggle = document.querySelector(".nav__toggle");
const navClose = document.querySelector(".nav__close");
const navMenu = document.querySelector(".nav__menu");

toggle.addEventListener("click", () => {
    navMenu.setAttribute("style", "top: 0;");
});

if (navClose){
    navClose.addEventListener("click", () => {
        navMenu.setAttribute("style", "top: -100%;");
    });
    
    // doing same if link is cliked
    
    const navLinks = document.querySelector(".nav__link");
    Array.from(navLinks).forEach(element => {
        element.addEventListener("click", (event) => {
            // event.preventDefault();
            navMenu.setAttribute("style", "top: -100%;");
        });
    });

}


// scrollbtn

const scrollBtn = document.querySelector("#scroll-up");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 500) {
        scrollBtn.classList.add("scrollShow");
    } else {
        scrollBtn.classList.remove("scrollShow");
    }
});




// changing theme
const theme = document.querySelector("#theme-button");

// checking local storage

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    theme.classList.replace('fa-moon','fa-sun');
} else {
    document.body.classList.remove("dark-theme");
    theme.classList.replace('fa-sun','fa-moon');
}

theme.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    
    theme.classList.contains('fa-moon') ? theme.classList.replace('fa-moon','fa-sun') : theme.classList.replace('fa-sun','fa-moon');
    
    // saving to local storage
    localStorage.setItem("theme", document.body.classList.contains("dark-theme")? "dark" : "light");
});






// scrollreveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    delay: 500,
})
// sr.reveal('.header',{

// });
sr.reveal('.home__image', {
    
});
sr.reveal('.home__data', {
    origin: 'bottom',
});
sr.reveal('.about__data', {
    origin: 'right',
    
});
sr.reveal('.about__image', {
    origin: 'left',
    delay:200,
});

sr.reveal('.section__subtitle ', {
});
sr.reveal( '.section__title', {
    
});
sr.reveal( '.popular__card', {
    delay:0,
    interval:1000,
    origin: 'bottom',
});
sr.reveal('.recently img', {
    origin: 'right',
    
});

sr.reveal('.newsletter__image', {
    origin: 'right',
    distance:'200px',
});
sr.reveal('.newsletter__button', {
    origin: 'right',
    distance:'200px',
});

sr.reveal('.footer__content>div', {
    origin: 'right',
    interval:500,
});

sr.reveal('.logo_container', {
    origin: 'left',

});

sr.reveal('.footer__copy', {
    origin: 'bottom',
    
});