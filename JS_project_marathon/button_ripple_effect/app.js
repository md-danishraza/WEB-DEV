const btn = document.querySelector("#btn");

btn.addEventListener("mouseover", (event) => {
    console.log(event.pageX);
    console.log(event.pageY);

    const rect = btn.getBoundingClientRect();

    btn.style.setProperty("--x", `${event.pageX - rect.left}px`);
    btn.style.setProperty("--y", `${event.pageY - rect.top}px`);
});