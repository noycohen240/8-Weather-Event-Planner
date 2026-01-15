// 1. הקישור שקיבלת מגוגל (בשלב ה-Deployment)
const scriptURL = 'הדבק_כאן_את_הקישור_שלך_מגוגל';

// 2. גישה לאלמנטים בטופס
const form = document.getElementById('supportForm');
const submitBtn = form.querySelector('.submit-button');

form.addEventListener('submit', e => {
  // מניעת רענון הדף
  e.preventDefault();
  
  // שינוי מצב הכפתור כדי למנוע לחיצות כפולות
  submitBtn.disabled = true;
  submitBtn.innerText = 'Sending...';

  // שליחת הנתונים לגוגל
  fetch(scriptURL, { 
    method: 'POST', 
    body: new FormData(form)
  })
  .then(response => {
    alert('Thank you! Your support request has been sent successfully.');
    form.reset(); // ניקוי הטופס
  })
  .catch(error => {
    console.error('Error!', error.message);
    alert('Oops! Something went wrong. Please try again later.');
  })
  .finally(() => {
    // החזרת הכפתור למצב רגיל
    submitBtn.disabled = false;
    submitBtn.innerText = 'Submit Request';
  });
});
