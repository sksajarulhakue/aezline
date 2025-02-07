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

// Change the word every 2 seconds
setInterval(changeWord, 2500);




