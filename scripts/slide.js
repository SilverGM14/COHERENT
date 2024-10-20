let currentSlide = Math.floor(Math.random() * totalSlides); // Comienza en una diapositiva aleatoria
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? '1' : '0'; // Cambia la opacidad en lugar de display
        slide.style.transition = 'opacity 1s ease'; // Agrega transición suave
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Inicializa el carrusel mostrando una diapositiva aleatoria
showSlide(currentSlide);

// Cambia de diapositiva cada 6.5 segundos
setInterval(nextSlide, 6500);

// Control de navegación
document.getElementById('nextSlide').addEventListener('click', nextSlide);
document.getElementById('prevSlide').addEventListener('click', prevSlide);

