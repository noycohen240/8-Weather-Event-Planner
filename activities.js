function checkDay() {
    const daySelect = document.getElementById('daySelect');
    const selectedDay = daySelect.value;
    const activityCards = document.querySelectorAll('.activity-card');

    if (selectedDay === 'Thursday' || selectedDay === 'Friday') {
        alert("Rain is expected on this day! 🌧️\nShowing indoor activities only.");
    }


    activityCards.forEach(card => {
        if (selectedDay === 'Thursday' || selectedDay === 'Friday') {
          
            if (card.classList.contains('all-weather')) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        } else {
        
            card.style.display = 'flex';
        }
    });
}