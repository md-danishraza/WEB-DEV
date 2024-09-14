const bg = document.querySelector('#bg-image');

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    bg.style.transform = `translateY(-${window.scrollY*0.2}px)`;
    bg.style.opacity = 1 - (window.scrollY / 1000);
    bg.style.backgroundSize = 150 - window.scrollY /10  + "%";

})
