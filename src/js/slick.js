let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    updateSlider();
}

function updateSlider() {
    const slides = document.querySelector('.slides');
    const offset = -currentSlide * 100; // 100% for each slide
    slides.style.transform = `translateX(${offset}%)`;
}

// Initial call to set the first slide
updateSlider();
