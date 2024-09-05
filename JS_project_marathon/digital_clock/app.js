const hour = document.getElementById('hour');
const mint = document.getElementById('mint');
const sec = document.getElementById('second');
const mid = document.getElementById('mid-day');


function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM";

    if(h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    if(h < 10) {
        h = "0" + h;
    }
    if(m < 10) {
        m = "0" + m;
    }
    if(s < 10) {
        s = "0" + s;
    
    }
    hour.innerHTML = h;
    mint.innerHTML = m;
    sec.innerHTML = s;
    mid.innerHTML = ampm;

    // after 1 second call fn again 
    setTimeout(()=>{
        updateClock()
    }, 1000);
}

updateClock();