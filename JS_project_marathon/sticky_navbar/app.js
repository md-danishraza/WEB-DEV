const nav = document.querySelector('nav');
const bottomEl = document.querySelector(".bottom-container");


window.addEventListener('scroll', () => {
    // adding nav height + margin 
    if (bottomEl.offsetTop > (window.scrollY+nav.offsetHeight+50)){
        nav.classList.add('active');
    }else{
        nav.classList.remove('active');
    }


})