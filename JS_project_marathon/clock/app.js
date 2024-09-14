const hour = document.querySelector('.hour');
const mint = document.querySelector('.mint');
const sec = document.querySelector('.second');

function updateClock(){
    const now = new Date();

    const hourDeg = (now.getHours() / 12) * 360;
    const mintDeg = (now.getMinutes() / 60) * 360;
    const secDeg = (now.getSeconds() / 60) * 360;

    hour.style.transform = `rotate(${hourDeg}deg)`;
    mint.style.transform = `rotate(${mintDeg}deg)`;
    sec.style.transform = `rotate(${secDeg}deg)`;



    setTimeout(updateClock, 1000);
}

updateClock()