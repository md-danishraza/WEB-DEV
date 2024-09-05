const container = document.querySelector('.container');

const right = document.querySelector('.right');
const left = document.querySelector('.left');

right.addEventListener('mouseenter', () => container.classList.add('active-right'));
right.addEventListener('mouseleave', () => container.classList.remove('active-right'));
left.addEventListener('mouseenter', () => container.classList.add('active-left'));
left.addEventListener('mouseleave', () => container.classList.remove('active-left'));