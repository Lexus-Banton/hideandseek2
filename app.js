/* Imports */
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const cutButton = document.getElementById('cut-button');

const rockContainer = document.getElementById('rock-container');
const paperContainer = document.getElementById('paper-container');
const cutContainer = document.getElementById('cut-container');

const winsEl = document.getElementById('wins');
const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');

/* State */
const handSigns = ['rock', 'paper', 'cut'];

let correctGusses = 0;
let totalGusses = 0;

//set event listeners

rockButton.addEventListener('click', () => {
    const answer = getRandomItem(handSigns);
    handleGuess(answer, 'rock');
});

paperButton.addEventListener('click', () => {
    const answer = getRandomItem(handSigns);
    handleGuess(answer, 'paper');
});

cutButton.addEventListener('click', () => {
    const answer = getRandomItem(handSigns);
    handleGuess(answer, 'cut');
});

// set reset styles

function resetStyles() {
    rockContainer.classList.remove('taliah');
    paperContainer.classList.remove('taliah');
    cutContainer.classList.remove('taliah');
}

function handleGuess(correctSpot, userGuess) {
    resetStyles();

    const
}
/* Actions */
function loadPage() {}

/* Components */

/* Component */
// get DOM
// display
// event listeners

/* Run page load code */
loadPage();
