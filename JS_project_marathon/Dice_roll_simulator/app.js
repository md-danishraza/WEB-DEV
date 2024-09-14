const btn = document.querySelector('#roll-btn');
const dice = document.querySelector("#dice");

const arr = [];
// for(let i of arr){
//     
// li.innerHTML = `<li>Roll ${i+1}: <>${arr[i]}</span></li>`;
    // 

//     
// }
const ul = document.querySelector("ul");
function rolldice(){
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = "&#" + (9855+randomNumber) + ';';
    console.log("&#" + (9855+randomNumber) + ';');
    arr.push("&#" + (9855+randomNumber) + ';');

    const li = document.createElement("li");
    li.innerHTML = `Roll ${arr.length}: <span>${arr[arr.length-1]}</span>`;
    
    ul.appendChild(li);
    
}
btn.addEventListener('click', ()=>{
    dice.classList.add('roll-animation');
    setTimeout(() => {
        dice.classList.remove('roll-animation');
    }, 1000);
    rolldice()
})


const clear = document.querySelector('#clear-btn');

clear.addEventListener('click', ()=>{
    ul.innerHTML = '';
})