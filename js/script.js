document.addEventListener('DOMContentLoaded', function() {
  const enrollBtn = document.getElementById('enroll-btn');
  const courseDetails = document.getElementById('course-details');
  const paymentForm = document.getElementById('payment-form');
  const successMessage = document.getElementById('success-message');

  enrollBtn.addEventListener('click', function() {
    courseDetails.classList.add('hidden');
    paymentForm.classList.remove('hidden');
  });

  paymentForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Here, you can handle the payment processing logic
    // For simplicity, we'll simulate a successful payment
    paymentForm.classList.add('hidden');
    successMessage.classList.remove('hidden');
  });
});
