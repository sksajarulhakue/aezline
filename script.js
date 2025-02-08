// Words to cycle through
const words = ["Websites", "Journey"];
let currentWordIndex = 0;

// Function to change the word
function changeWord() {
    const highlight = document.getElementById("highlight-word");
    highlight.textContent = words[currentWordIndex]; // Set the new word

    // Update the index for the next word, looping back to 0 when reaching the end
    currentWordIndex = (currentWordIndex + 1) % words.length; 
}

// Change the word every 2.5 seconds
setInterval(changeWord, 2500);

// Header navigations 
// Function to handle the smooth scroll with offset
function smoothScrollToTarget(event) {
    event.preventDefault();
    const targetElement = document.querySelector('#home');
    const offset = -100; // Adjust this value to your desired offset

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset + offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

// Attach the event listener to both the image and the link
document.querySelector('.logo img').addEventListener('click', smoothScrollToTarget);
document.querySelector('a[href="#home"]').addEventListener('click', smoothScrollToTarget);


document.querySelector('a[href="#about"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth',
        block: 'center' // Use 'center' to align the element at the center of the screen
    });
});


document.querySelector('a[href="#services"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#services').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

document.querySelector('a[href="#portfolio"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#portfolio').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});

document.querySelector('a[href="#contact"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
});