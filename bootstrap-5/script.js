// const play = document.getElementById('play');

// play.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('clicked play');

//     const video = document.createElement('video');
//     video.src = "images/video.mp4";
//     video.controls = true;

//     const intro = document.getElementById('home');
//     intro.appendChild(video);
    
//     const i = document.createElement('i');
//     i.classList.add("fa-solid");
//     i.classList.add("fa-xmark");
//     i.id = "close";
//     intro.appendChild(i);
    
// })

// const i = document.getElementById('close');
// i.addEventListener('click',() =>{
//     const intro = document.getElementById('home');
//     intro.removeChild(video);
//     intro.removeChild(i);

// })

const play = document.getElementById('play');

play.addEventListener('click', function(event){
    event.preventDefault();
    console.log('clicked play');

    // Create and configure video element
    const video = document.createElement('video');
    video.src = "images/video.mp4";
    video.controls = true;
    video.autoplay = true;
    video.loop = true;  // Loop the video when finished playing
    video.classList.add('video-element');  // Add a class for future reference

    // Append video to the section
    const intro = document.getElementById('home');
    intro.appendChild(video);
    
    // Create and configure close button
    const closeButton = document.createElement('i');
    closeButton.classList.add("fa-solid", "fa-xmark");
    closeButton.id = "close";
    
    // Append close button to the section
    intro.appendChild(closeButton);

    // Add event listener to close the video when closeButton is clicked
    closeButton.addEventListener('click', function() {
        intro.removeChild(video);
        intro.removeChild(closeButton);
    });
});







