const days = document.querySelector('.days');
const hours = document.querySelector('.hours')
const minutes = document.querySelector('.mints')
const seconds = document.querySelector('.seconds')


const newyear = Date.parse('1 Jan 2024 00:00:00');

// milliseconds in 
let oneDay = 1000 * 60 * 60 * 24;
let onehours = 1000 * 60 * 60;
let onemints = 1000 * 60;
let oneseconds = 1000;


const countdown = setInterval(function () {
    const remain = Math.abs(newyear - Date.now());

    days.innerHTML = Math.floor(remain / oneDay);
    hours.innerHTML = Math.floor((remain % oneDay) / onehours);
    minutes.innerHTML = Math.floor((remain % onehours) / onemints);
    seconds.innerHTML = Math.floor((remain % onemints) / oneseconds);

},1000);

// countdown();