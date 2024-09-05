const body = document.querySelector('body');

body.addEventListener("mousemove",(event)=>{
    console.log(event.offsetX,event.offsetY);

    const xpos = event.offsetX;
    const ypos = event.offsetY;
    const heart = document.createElement("span");
    heart.style.left = xpos + "px";
    heart.style.top = ypos + "px";
    
    // adding bg color and position to the heart
    const hue = Math.random() * 360;
    heart.style.backgroundColor = `hsl(${hue}, 100%, 50%)`
    const rn = Math.random() * 100;
    heart.style.width = rn + "px";
    heart.style.height = rn + "px";
    body.appendChild(heart);



    setTimeout(()=>{
        body.firstChild.remove();
    },1000);

})