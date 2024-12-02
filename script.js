// Get references to the button and overlay elements
const openOverlayBtn = document.getElementById('open-overlay-btn');
const closeOverlayBtn = document.getElementById('close-overlay-btn');
const overlay = document.getElementById('overlay');

// Add event listener to open overlay when the button is clicked
openOverlayBtn.addEventListener('click', () => {
    overlay.classList.add('active');
});

// Add event listener to close overlay when the close button is clicked
closeOverlayBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
});