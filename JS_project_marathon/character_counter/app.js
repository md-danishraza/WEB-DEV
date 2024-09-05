const total = document.querySelector("#total");
const remaining = document.querySelector("#remaining");

const textarea = document.querySelector("textarea");

textarea.addEventListener("input", () => {
    updateCounter();
})

function updateCounter() {
    total.textContent = textarea.value.length;
    remaining.textContent = textarea.getAttribute("maxlength") - textarea.value.length;
}