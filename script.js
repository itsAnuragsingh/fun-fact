// script.js
const facts = [
    "I am a 21 year old enthusiast who loves adventure.",
    "I am passionate about cricket and enjoy playing and watching matches.",
    "I have a deep appreciation for mountains and their natural beauty.",
    "I enjoy hiking and exploring mountainous terrains.",
    "I aspire to visit famous cricket grounds around the world."
];

const factDisplay = document.getElementById('fact-display');
const factButton = document.getElementById('fact-button');

// Function to generate a random fact
function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

// Event listener for button click
factButton.addEventListener('click', () => {
    factDisplay.textContent = getRandomFact();
});

// Display initial random fact
factDisplay.textContent = getRandomFact();
