// Hamburguer menu
let hamIcon = document.querySelector(".ham-menu");
let displayNav = document.querySelector(".active");

hamIcon.addEventListener("click", () => {
    displayNav.classList.toggle("active");
})

/* Convert btn */
const inputText = document.querySelector(".convert-input");
const btn = document.querySelector(".convert-btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (inputText.value !== "") {
        const hash = md5(inputText.value);
        alert(hash);
        inputText.value = "";
    } else {
        inputText.placeholder = "* Required field";
    }
})