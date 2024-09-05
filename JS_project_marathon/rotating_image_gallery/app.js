const imageContainer = document.querySelector('.image-container');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

let x = 0;

prev.addEventListener('click', () => {
  x = x + 45
  updateImage();
})
next.addEventListener('click', () => {
    x = x - 45
  updateImage()
})

function updateImage() {
    imageContainer.style.transform = `perspective(1000px) rotateY(${x}deg)`
}