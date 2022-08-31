let player = document.getElementById("player");
let gameOutput = document.getElementById("game-output");
let randomCards = document.getElementById("random-cards");
let cardsSum = document.getElementById("cards-sum");
let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";
let playerDetails = {
    name: 'Paulina',
    chips: 100
}

player.textContent = `Hi ${playerDetails.name}, you have ${playerDetails.chips} chips. Let's start the game!`

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1) {
        return 11;
    } else if (randomCard > 10) {
        return 10;
    } else {
        return randomCard;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    if (sum === 21) {
        message = "BLACKJACK!!! You won!";
        hasBlackJack = true;
    } else if (sum < 21) {
        message = "Do you want to draw one more card?"
    } else {
        message = "You lost! You are out of the game."
        isAlive = false;
    }
    gameOutput.textContent = message;

    randomCards.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        randomCards.textContent += cards[i] + " ";
    }

    cardsSum.textContent = "Sum: " + sum;
}

function addCard() {
    if (hasBlackJack === false && isAlive === true) {
        let nextCard = getRandomCard();
        sum += nextCard;
        cards.push(nextCard);
        renderGame();
    }
}

function resetGame() {
    cards = [];
    sum = 0;
    randomCards.textContent = "Cards: No cards"
    cardsSum.textContent = "Sum: " + sum;
    gameOutput.textContent = " ";
}