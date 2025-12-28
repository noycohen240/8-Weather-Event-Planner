const hamburger = document.querySelector(".hamburger");
const menu_list = document.querySelector(".menu_list");
const hamburgerIcon = hamburger.querySelector("span")

hamburger.addEventListener("click", function(){
    menu_list.classList.toggle("active");

    if(hamburgerIcon.textContent.trim() == "menu"){
        hamburgerIcon.textContent = "close";
    }
    else{
        hamburgerIcon.textContent = "menu";
    }
});