const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    displayWinner();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    switch (randomNumber) {
        case 1:
            computerChoice = "Rock";
            break;
        case 2:
            computerChoice = "Paper";
            break;
        case 3:
            computerChoice = "Scissors";
            break;
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function displayWinner() {
    if (computerChoice === userChoice) {
        result = "It's a draw.";
    }
    else if (computerChoice === "Rock" && userChoice === "Paper") {
        result = "You won!";
    }
    else if (computerChoice === "Paper" && userChoice === "Scissors") {
        result = "You won!";
    }
    else if (computerChoice === "Scissors" && userChoice === "Rock") {
        result = "You won!";
    }
    else {
        result = "You lost...";
    }
    resultDisplay.innerHTML = result;
}