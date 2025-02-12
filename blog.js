document.addEventListener("DOMContentLoaded", function () {
    const blogCards = document.querySelectorAll(".blog-card");

    function revealCards() {
        blogCards.forEach((card) => {
            const cardTop = card.getBoundingClientRect().top;
            if (cardTop < window.innerHeight - 50) {
                card.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealCards);
    revealCards(); // Run on load
});
