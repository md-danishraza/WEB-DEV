const searchBar = document.querySelector(".searchBar-container");

const icon = document.querySelector(".magnifier")

icon.addEventListener("click", () => 
    searchBar.classList.toggle("active")
);