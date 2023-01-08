// Constants
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

// Variables
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
let countDownTimerId = setInterval(countDown, 1000);


// randomSquare Function
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole");
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");

    hitPosition = randomSquare.id;
}

// moveMole Function
function moveMole() {
    timerId = setInterval(randomSquare, 1000);
}

// countDown function 
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert("GAME OVER! Your final score is " + result);
        window.confirm("Play again?");
    }
}

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});


moveMole();
countDown();




