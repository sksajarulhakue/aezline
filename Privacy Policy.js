document.addEventListener('DOMContentLoaded', function() {
    // Set the last updated date
    const lastUpdatedElement = document.querySelector('.last-updated');
    if (lastUpdatedElement) {
        const currentDate = new Date();
        lastUpdatedElement.textContent = `Last updated: ${currentDate.toLocaleDateString()}`;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animation for sections
    const sections = document.querySelectorAll('.policy-section');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });
});
