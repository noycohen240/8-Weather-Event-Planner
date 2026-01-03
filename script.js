const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".menu_list");
const themeToggle = document.querySelector(".theme_toggle");

hamburger.addEventListener("click", function () {
    header.classList.toggle("nav-open");

});


themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "Light Mode";
    }
    else {
        themeToggle.textContent = "Dark Mode";
    }
});