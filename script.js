let currentSlide = 0;

// Function to show the next slide
function showNextSlide() {
    const slides = document.querySelectorAll('.slider img');
    const buttons = document.querySelectorAll('.slider-nav a');
    const numSlides = slides.length;

    // Hide the current slide and reset progress bar
    slides[currentSlide].style.display = 'none';
    buttons[currentSlide].classList.remove('active');

    // Increment the slide index and loop back to the first slide if needed
    currentSlide = (currentSlide + 1) % numSlides;

    // Show the next slide and set the next button as active
    slides[currentSlide].style.display = 'block';
    buttons[currentSlide].classList.add('active');
}

// Function to start the automatic slideshow
function startSlideshow() {
    // Initially, display the first slide
    const slides = document.querySelectorAll('.slider img');
    const buttons = document.querySelectorAll('.slider-nav a');

    slides[currentSlide].style.display = 'block';
    buttons[currentSlide].classList.add('active');

    // Set an interval to call the showNextSlide function every 5 seconds (adjust as needed)
    setInterval(showNextSlide, 5000);
}

// Add an event listener for each button in the slider-nav
document.querySelectorAll('.slider-nav a').forEach((button, index) => {
    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the current slide and reset progress bar
        const slides = document.querySelectorAll('.slider img');
        const buttons = document.querySelectorAll('.slider-nav a');

        slides[currentSlide].style.display = 'none';
        buttons[currentSlide].classList.remove('active');

        // Update the currentSlide to the clicked button's index
        currentSlide = index;

        // Show the selected slide and set the button as active
        slides[currentSlide].style.display = 'block';
        buttons[currentSlide].classList.add('active');
    });
});

// Call the startSlideshow function when the page loads
window.addEventListener('load', startSlideshow);