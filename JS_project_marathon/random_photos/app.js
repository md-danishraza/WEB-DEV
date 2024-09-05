const load = document.querySelector("#generate-btn");
const container = document.querySelector(".image-container");
load.addEventListener("click", function () {
    for(let i = 0; i < 5; i++) {
        const rand = Math.round(Math.random() * 1000);
        const img = document.createElement("img");
        img.src = `https://picsum.photos/300?random=${rand}`;
        container.appendChild(img);
    }
})

const reset = document.querySelector("#reset");
reset.addEventListener("click", function () {
    container.innerHTML = "";
})