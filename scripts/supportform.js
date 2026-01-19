const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".menu_list");

hamburger.addEventListener("click", function () {
    header.classList.toggle("active");
    document.body.classList.toggle("menu_open")
});

const form = document.getElementById('supportForm');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const userName = document.getElementById('user-name').value;

    const successMessage = `Thank you, ${userName}!\n\nYour support request has been successfully received. It has been forwarded to our representative, who will contact you shortly.\n\nNo Matter The Weather, we are here for you!`;
    
    alert(successMessage);

    form.reset();
    
    console.log("Form submitted successfully (Visual only)");
});
