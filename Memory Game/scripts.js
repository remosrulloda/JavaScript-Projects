document.addEventListener("DOMContentLoaded", () => {
    // Card Options
    const cardArray = [
        {
            name: "fries",
            img: "images/fries.png",
        },
        {
            name: "cheeseburger",
            img: "images/cheeseburger.png",
        },
        {
            name: "hotdog",
            img: "images/hotdog.png",
        },
        {
            name: "ice-cream",
            img: "images/ice-cream.png",
        },
        {
            name: "milkshake",
            img: "images/milkshake.png",
        },
        {
            name: "pizza",
            img: "images/pizza.png",
        },
        {
            name: "fries",
            img: "images/fries.png",
        },
        {
            name: "cheeseburger",
            img: "images/cheeseburger.png",
        },
        {
            name: "hotdog",
            img: "images/hotdog.png",
        },
        {
            name: "ice-cream",
            img: "images/ice-cream.png",
        },
        {
            name: "milkshake",
            img: "images/milkshake.png",
        },
        {
            name: "pizza",
            img: "images/pizza.png",
        }
    ]

    // Sort the cards in a random order
    cardArray.sort(() => 0.5 - Math.random()) // Short cut to shuffling an array randomly

    const gridDisplay = document.querySelector("#grid");
    const resultDisplay = document.querySelector("#result");
    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardsWon = [];

    // createBoard Function
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "images/blank.png");
            card.setAttribute("data-id", i);
            // On click, flip the card to its image
            card.addEventListener("click", flipCard);
            gridDisplay.append(card);
        }
    }

    // checkMatch Function
    function checkMatch() {
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenIds[0];
        const optionTwoId = cardsChosenIds[1];

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
            alert("You have clicked on the same image!");
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            // Changes both matches to white when match is found
            alert("You found a match!");
            cards[optionOneId].setAttribute("src", "images/white.png");
            cards[optionTwoId].setAttribute("src", "images/white.png");
            cards[optionOneId].removeEventListener("click", flipCard);
            cards[optionTwoId].removeEventListener("click", flipCard);
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute("src", "images/blank.png");
            cards[optionTwoId].setAttribute("src", "images/blank.png");
            alert("Sorry, try again!");
        }

        // Restart process 
        cardsChosen = [];
        cardsChosenIds = [];

        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = "Congratulations, you found them all!";
        }
    }

    // flipCard Function
    function flipCard() {
        // Assigns each card id with the data
        const cardId = this.getAttribute("data-id");
        // Pushes the name of each card to cardsChosen Array
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenIds.push(cardId);
        // Assigns the image to each card
        this.setAttribute("src", cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkMatch, 100);
        }
    }

    createBoard();
})

