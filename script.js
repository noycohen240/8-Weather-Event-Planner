const hamburger = document.querySelector(".hamburger");
const menu_list = document.querySelector(".menu_list");

hamburger.addEventListener("click", function(){
    menu_list.classList.toggle("active");

    if(hamburger.textContent == "menu"){
        hamburger.textContent = "close";
    }
    else{
        hamburger.textContent = "menu";
    }
});