document.addEventListener("DOMContentLoaded", () => {
    const clientSlides = document.querySelector(".client-slides");
    const slides = Array.from(clientSlides.children);
    const slideWidth = slides[0].offsetWidth;
    const slidesPerRow = 3; // Number of slides per row
    let index = 0;
    let isTransitioning = false;
    let slideTimer;

    // Duplicate slides to create infinite effect
    slides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clientSlides.appendChild(clone);
    });

    function moveSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            index++;
            clientSlides.style.transition = "transform 0.5s linear";
            clientSlides.style.transform = `translateX(-${index * slideWidth}px)`;

            // Reset transition for infinite scrolling
            setTimeout(() => {
                if (index >= slides.length / slidesPerRow) {
                    clientSlides.style.transition = "none";
                    clientSlides.style.transform = `translateX(0)`;
                    index = 0;
                }
                isTransitioning = false;
            }, 500);
        }
    }

    function startSlideShow() {
        slideTimer = setInterval(moveSlide, 2500);
    }

    function stopSlideShow() {
        clearInterval(slideTimer);
    }

    // Event listeners for mouse hover
    const clientSlider = document.querySelector(".client-slider");
    clientSlider.addEventListener("mouseenter", stopSlideShow);
    clientSlider.addEventListener("mouseleave", startSlideShow);

    // Start the slideshow initially
    startSlideShow();
});
