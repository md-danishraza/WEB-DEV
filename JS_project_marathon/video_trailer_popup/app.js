const watch = document.querySelector('.btn');
const video = document.querySelector('.trailer');

watch.addEventListener('click', () => {
  video.classList.add('active');
});

const close = document.querySelector('i');
close.addEventListener('click', () => {
    video.classList.remove('active');
    const content = document.querySelector('video')
    content.pause();
    const savedTime = content.currentTime;
    // saving resume time to local storage
    localStorage.setItem('videoTime', savedTime);
})

// when page is loaded, check if there is a saved time in local storage and resume the video from that

window.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('video')
    const savedTime = localStorage.getItem('videoTime') || 0;

    // if there is a saved time, set the current time of the video to that time and play the video
    if (savedTime > 0) {
        content.currentTime = savedTime;
        content.play();
    }
})