// הקישור שלך מגוגל - ניקיתי אותו מתווים מיותרים
const scriptURL = 'https://script.google.com/macros/s/AKfycbz0g2QX3NWh0T1gTQkEZrGtrOboQjcx-8JgFlZO8N8cYWqk6VxJpz0auuFgyTOAb9ln/exec';

const form = document.getElementById('supportForm' );

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // מציאת הכפתור בתוך הטופס
  const submitBtn = form.querySelector('.submit-button');
  
  // מניעת לחיצות כפולות
  submitBtn.disabled = true;
  submitBtn.innerText = 'Sending...';

  console.log("Sending data to Google Sheets...");

  // שליחת הנתונים
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)
  })
  .then(response => {
    console.log("Success!", response);
    alert('Success! Your request has been saved to Excel.');
    form.reset(); // ניקוי הטופס
  })
  .catch(error => {
    console.error("Error!", error.message);
    alert('Oops! Something went wrong: ' + error.message);
  })
  .finally(() => {
    // החזרת הכפתור למצב רגיל
    submitBtn.disabled = false;
    submitBtn.innerText = 'Submit Request';
  });
});
