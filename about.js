const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".menu_list");

hamburger.addEventListener("click", function () {
    header.classList.toggle("active");
    document.body.classList.toggle("menu_open")
});
