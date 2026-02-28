// Основная инициализация
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация слайдера
    initSlider();
    
    // Intersection Observer для анимации слайдов
    const slides = document.querySelectorAll('.slide');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    slides.forEach(slide => observer.observe(slide));
});