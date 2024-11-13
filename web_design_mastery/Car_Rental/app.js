const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');


menuBtn.addEventListener('click',(event) => {
    
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line":"ri-menu-line");
})

navLinks.addEventListener('click',(event) => {

    navLinks.classList.toggle('open');
    menuBtnIcon.setAttribute("class", "ri-menu-line");  
});




const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info");

const price = ["225", "455", "275", "625", "395"];

const priceEl = document.getElementById("select-price");

function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    priceEl.innerText = price[index];
    selectCards.forEach((item) => {
      item.classList.remove("show__info");
    });
    selectCards[index].classList.add("show__info");
  }
}
// swiper initialization
const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  onAny(event, ...args) {
    updateSwiperImage(event, args);
  },

   // And if we need scrollbar
   scrollbar: {
    el: '.swiper-scrollbar',
  },
});


// banner
const banner = document.querySelector(".banner__wrapper");

const bannerContent = Array.from( banner.children );

bannerContent.forEach(item => {
  const duplicateNode = item.cloneNode( true );
  duplicateNode.setAttribute("aria-hidden", "true");
  banner.appendChild(duplicateNode);
})






// scroll reveal
const scrollRevealOption = {
    origin : "top",
    distance : "50px",
    duration : 1000,
    reset: true,
    
}

ScrollReveal().reveal(".header__container h1",{...scrollRevealOption,});
ScrollReveal().reveal(".header__container form",{...scrollRevealOption,delay:500});
ScrollReveal().reveal(".header__container img",{...scrollRevealOption,delay:1000});
// cards
ScrollReveal().reveal(".range__card",{
    duration:1000,
    interval: 500,
});

//location
ScrollReveal().reveal(".location__content h2",{...scrollRevealOption});
ScrollReveal().reveal(".location__content p",{...scrollRevealOption,delay:500});
ScrollReveal().reveal(".location__btn",{...scrollRevealOption,delay:1000});

ScrollReveal().reveal(".location__image",{origin:"right",distance:"100px",duration:1000});

ScrollReveal().reveal(".story__card",{...scrollRevealOption,interval:500});

// download
ScrollReveal().reveal(".download__container .download__image",{...scrollRevealOption,origin:"right"});
ScrollReveal().reveal(".download__container .section__header",{...scrollRevealOption,delay:500});
ScrollReveal().reveal(".download__container .download__links",{...scrollRevealOption,delay:1000});

// footerlinks
ScrollReveal().reveal(".news__container>h2",{origin:"left",distance:"100px",duration:1000});

ScrollReveal().reveal(".footer__col",{...scrollRevealOption,interval:500});

