const toggle = document.querySelector('.label');
const check = document.querySelector('.input');

check.checked = JSON.parse(localStorage.getItem("mode"));

toggle.addEventListener('click', function(event) {
    if (check.checked == true) {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
    }

    updateLocalStorage(check);
});

function updateLocalStorage(check){
    localStorage.setItem("mode",JSON.stringify(check.checked));
}