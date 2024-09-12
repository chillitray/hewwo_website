let currentSlide = 0;
const slideWidth = 100;
let carouselInner,
  dotsContainer,
  carousel,
  carousel840px,
  slides,
  totalSlides,
  slideInterval;

function initializeCarousel() {
  // Determine which carousel to use based on screen width
  if (window.innerWidth >= 1025) {
    carousel = document.querySelector(".carousel");
    carouselInner = carousel.querySelector(".carousel-inner");
    dotsContainer = carousel.querySelector(".carousel-dots");
  } else {
    carousel = document.querySelector(".carousel-840px");
    carouselInner = carousel.querySelector(".carousel-inner");
    dotsContainer = carousel.querySelector(".carousel-dots");
  }

  slides = carouselInner.querySelectorAll(".carousel-item");
  totalSlides = slides.length;

  createDots();
  showSlide(currentSlide);
  startCarousel();
}

// Show specific slide
function showSlide(index) {
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * slideWidth;
  carouselInner.style.transform = `translateX(${offset}%)`;

  updateDots();
}

// Move slide by step
function moveSlide(step) {
  showSlide(currentSlide + step);
}

// Go to specific slide
function goToSlide(index) {
  showSlide(index);
}

// Create dots
function createDots() {
  dotsContainer.innerHTML = "";
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.classList.add("carousel-dot");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
}

// Update dots' active state
function updateDots() {
  const dots = dotsContainer.querySelectorAll(".carousel-dot");
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

// Auto-slide function
function startCarousel() {
  slideInterval = setInterval(() => {
    moveSlide(1);
  }, 2000);
}

// Stop auto-slide
function stopCarousel() {
  clearInterval(slideInterval);
}

// Handle carousel visibility on mouse enter/leave
function handleCarouselEvents() {
  carousel.addEventListener("mouseenter", stopCarousel);
  carousel.addEventListener("mouseleave", startCarousel);
}

// Initialize carousel on load
initializeCarousel();

// Reinitialize on window resize
window.addEventListener("resize", () => {
  initializeCarousel();
  handleCarouselEvents();
});
