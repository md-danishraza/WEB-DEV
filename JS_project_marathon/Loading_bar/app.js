const counter = document.querySelector('.counter')
const bar = document.querySelector('.loading-bar-front');

let count = 0;

function update(){
    counter.textContent = count+"%";
    bar.style.width = count+"%";
    if(count < 100){
        setTimeout(update,20)
    }
    count++;
}

update();