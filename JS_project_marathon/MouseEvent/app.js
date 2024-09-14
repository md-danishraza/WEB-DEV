const x = document.querySelector("#x");
const y = document.querySelector("#y");


window.addEventListener("mousemove",(event)=>{
    console.log(event.clientX,event.clientY);
    x.textContent = event.clientX;
    y.textContent = event.clientY;
})