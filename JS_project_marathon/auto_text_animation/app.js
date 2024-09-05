const body = document.querySelector(".container");

console.log(body.innerHTML);

carreers = ["Youtuber", "Web Developer", "Instructor", "Freelancer"];
let carreeridx = 0;
let charidx = 0;

function change(){
    
    if(carreeridx < carreers.length && charidx <= carreers[carreeridx].length){
        body.innerHTML = 
        `<h1>I am a <span>${carreers[carreeridx].slice(0,charidx)}</span></h1>`;
        charidx++;
        setTimeout(change,200);
    }else{

        carreeridx++
        charidx = 0
        setTimeout(change,200);
    }
}

change();