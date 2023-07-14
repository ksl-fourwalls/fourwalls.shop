$(document).ready(function() {
  const reviewForm = document.getElementById('review-form');
  const reviewList = document.getElementById('review-list');

  reviewForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    addReview(name, rating, comment);

    // Clear form fields
    reviewForm.reset();
  });

  function addReview(name, rating, comment) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="card mb-3">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">Rating: ${rating} Stars</p>
          <p class="card-text">${comment}</p>
        </div>
      </div>
    `;

    reviewList.appendChild(listItem);
  }
});
