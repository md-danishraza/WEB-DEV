const monthName = document.querySelector("#month-name");
const dayName = document.querySelector("#day-name");
const dayNumber = document.querySelector("#day-num");
const year = document.querySelector("#year");


const date = new Date();

// month name
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
monthName.innerText = months[date.getMonth()]


// weekday
weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]
dayName.innerText = weekdays[date.getDay()];


// day number
dayNumber.innerText = date.getDate();

// year 
year.innerText = date.getFullYear();