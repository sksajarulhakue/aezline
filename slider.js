let currentIndex = 0;
const banners = document.querySelectorAll('.banner-box');
const totalBanners = banners.length;

function showBanner(index) {
    const container = document.querySelector('.banner-container');
    container.style.transform = `translateX(-${index * 100}%)`;
}

function nextBanner() {
    currentIndex = (currentIndex + 1) % totalBanners;
    showBanner(currentIndex);
}

function prevBanner() {
    currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
    showBanner(currentIndex);
}

// Auto slide every 3 seconds
setInterval(nextBanner, 3000);

// Add event listeners for buttons
document.querySelector('.next').addEventListener('click', nextBanner);
document.querySelector('.prev').addEventListener('click', prevBanner);

// Initial display
showBanner(currentIndex);