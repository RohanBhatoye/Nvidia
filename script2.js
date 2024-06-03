document.addEventListener('DOMContentLoaded', function() {
  const sliderContainer = document.querySelector('.himages');
  const prevBtn = document.getElementById('prev-slide');
  const nextBtn = document.getElementById('next-slide');
  
  let currentOffset = 0;
  const slideWidth = sliderContainer.children[0].offsetWidth + 30; // Add the gap between images
  
  // Function to shift images to the left
  function shiftLeft() {
    currentOffset -= slideWidth * 1;
    if (currentOffset < -(slideWidth * (sliderContainer.children.length - 3))) {
      currentOffset = 0;
    }
    sliderContainer.style.transform = `translateX(${currentOffset}px)`;
  }
  
  // Function to shift images to the right
  function shiftRight() {
    currentOffset += slideWidth * 1;
    if (currentOffset > 0) {
      currentOffset = -(slideWidth * (sliderContainer.children.length - 3));
    }
    sliderContainer.style.transform = `translateX(${currentOffset}px)`;
  }
  
  // Event listeners for left and right buttons
  prevBtn.addEventListener('click', shiftRight);
  nextBtn.addEventListener('click', shiftLeft);
});