const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');
let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('rating')) {
        removeActive();
        e.target.classList.add('active');
        selectedRating = e.target.querySelector('small').innerText;
    }
});

sendBtn.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p><i>We'll use your feedback to improve our services</i></p>
    `;
});
function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active');
    });
}
