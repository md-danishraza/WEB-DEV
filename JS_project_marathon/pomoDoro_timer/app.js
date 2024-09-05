const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const timer = document.querySelector('.timer');



start.addEventListener('click', startTimer);
stop.addEventListener('click', stopTimer);
reset.addEventListener('click', resetTimer);


let interval;
let timeLeft = 1500;

function updateTimer() {
    let mint = Math.floor(timeLeft / 60);
    let secs = timeLeft % 60;

    if(mint < 10) {
        mint = "0" + mint;
    }
    if(secs < 10) {
        secs = "0" + secs;
    }
    timer.textContent = mint + ":" + secs;
}

function startTimer() {
    interval = setInterval(() =>{
        timeLeft--;
        updateTimer();
    },1000);
    
}

function stopTimer() {
    clearInterval(interval)
}

function resetTimer() { 
    clearInterval(interval);
    timeLeft = 1500;
    timer.textContent = "25:00";
}
