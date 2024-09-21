const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const slidesToShow = 4; // Número de imágenes visibles
const totalSlides = slides.length;

function showSlide(index) {
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - slidesToShow;
  } else {
    currentIndex = index;
  }
  const offset = -currentIndex * (100 / slidesToShow); // Desplazamiento en función del número de imágenes visibles
  carousel.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});
