document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.hero-slider');
    if (!sliderContainer) return;

    // --- Configuration ---
    const images = [
        'images/scene/scene13.png',
        'images/scene/scene3.png', 
        'images/scene/scene5.png',
        'images/scene/scene6.png',
        'images/scene/scene7.png',
        'images/scene/scene8.png',
        'images/scene/scene9.png',
        'images/scene/scene10.png'  
    ];
    const slideInterval = 5000; // 5 seconds

    // --- Element Creation ---
    images.forEach((imgSrc, i) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url(${imgSrc})`;
        if (i === 0) slide.classList.add('active');
        sliderContainer.prepend(slide); // Prepend to keep content on top
    });

    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider-btn--left');
    const btnRight = document.querySelector('.slider-btn--right');
    const dotsContainer = document.querySelector('.dots-container');

    slides.forEach((_, i) => {
        dotsContainer.insertAdjacentHTML('beforeend', `<button class="dot" data-slide="${i}"></button>`);
    });

    const dots = document.querySelectorAll('.dot');
    dots[0].classList.add('active');

    // --- Slider Logic ---
    let currentSlide = 0;
    const maxSlide = slides.length - 1;

    const goToSlide = (slideIndex) => {
        slides.forEach((s, i) => {
            s.classList.remove('active');
            dots[i].classList.remove('active');
        });

        slides[slideIndex].classList.add('active');
        dots[slideIndex].classList.add('active');
        currentSlide = slideIndex;
    };

    const nextSlide = () => {
        currentSlide = (currentSlide === maxSlide) ? 0 : currentSlide + 1;
        goToSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide === 0) ? maxSlide : currentSlide - 1;
        goToSlide(currentSlide);
    };

    // --- Event Listeners ---
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    dotsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('dot')) {
            const { slide } = e.target.dataset;
            goToSlide(parseInt(slide));
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });

    // --- Auto-play ---
    setInterval(nextSlide, slideInterval);
});