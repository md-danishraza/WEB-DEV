const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');


hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('left-0');
    //   changing the icon
    
    hamburger.classList.toggle('ri-close-large-line');
});

navLinks.forEach(element => {
    element.addEventListener('click', () => {
    navMenu.classList.toggle('-left-[100%]');
    //   changing the icon
    hamburger.classList.toggle('ri-close-large-line');
    });
});



// reviews swiper
// reviews swiper
const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});


// scrollup

const scrollUp = document.getElementById('scrollbtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollUp.classList.remove('-bottom-10');
        scrollUp.classList.add('bottom-4');
    } else {
        scrollUp.classList.add('-bottom-10');
        scrollUp.classList.remove('bottom-4');
    }
});


scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// navbar border
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        navbar.classList.add('shadow','shadow-pink-500');
    } else {

        navbar.classList.remove('shadow','shadow-pink-500');
    }
});



// scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true,
    delay: 500
});

sr.reveal('.home_content');
sr.reveal('.home_image',{scale: .5});

sr.reveal('.service_cards',{interval:300});

sr.reveal('.aboutUs__title');
sr.reveal('.aboutUs_leaf',{delay: 1000});
sr.reveal('.aboutUs__image-1',{origin:'right',distance: '200px'})
sr.reveal('.aboutUs__image-2',{origin:'left',distance: '200px'})
sr.reveal('.aboutUs_content-2',{origin:'right',distance: '200px'})
sr.reveal('.aboutUs_content-1',{origin:'left',distance: '200px'})

sr.reveal('.popular__title');
sr.reveal('.popular__card',{interval:200});
sr.reveal('.popular__card img',{interval:200,scale:.5,delay:700,origin:"center"});


sr.reveal('.review__title');
sr.reveal('.review_leaf',{delay: 1000});

sr.reveal('.newsletter__title');
sr.reveal('.input',{origin:'left'});
sr.reveal('.submitbtn',{origin:'right'});


sr.reveal('.icons i',{interval:200});

sr.reveal('.footer_leaf_icon',{scale:.5});
sr.reveal('.links a',{interval:200});
