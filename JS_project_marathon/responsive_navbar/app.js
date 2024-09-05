const bars = document.querySelector(".bars");
const menu = document.querySelector(".menu");

bars.addEventListener("click", () => {
    // assigning the class "active" to the menu on click 
  menu.classList.toggle("show-menu");
});