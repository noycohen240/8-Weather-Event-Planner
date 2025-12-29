const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu_list");
const themeToggle = document.querySelector("theme_toggle");

hamburger.addEventListener("click", function () {
    menuList.classList.toggle("active");

});



themeToggle.addEventListener("click", function () {
    console.log("dark mode click")
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    }
    else {
        themeToggle.textContent = "🌙";
    }
});