

const btns = document.querySelector('.container');


const sound = document.createElement('audio');

btns.addEventListener('click', (e) => {
    if (e.target.id === 'kick'){
        
        sound.src = "projects_drum-kits_sounds_kick.mp3";
        sound.play()
    }else if (e.target.id === 'snare') {
        // const sound = document.createElement('audio');
        sound.src = "projects_drum-kits_sounds_snare.mp3";
        sound.play()
        
    }else if(e.target.id === 'crash') {
        // const sound = document.createElement('audio');
        sound.src = "projects_drum-kits_sounds_crash.mp3";
        sound.play()

    }else{
        // const sound = document.createElement('audio');
        sound.src = "projects_drum-kits_sounds_tom.mp3";
        sound.play();
    }
});


window.addEventListener("keydown", (e) => {
    if (e.key === 'k') {
        sound.src = "projects_drum-kits_sounds_kick.mp3";
        sound.play()
    }else if (e.key === 's') {
        sound.src = "projects_drum-kits_sounds_snare.mp3";
        sound.play()
    }else if(e.key === 'c') {
        sound.src = "projects_drum-kits_sounds_crash.mp3";
        sound.play()
    }else{
        sound.src = "projects_drum-kits_sounds_tom.mp3";
        sound.play();
    }
})
