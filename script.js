// need to select all of the cards
const cards = document.querySelectorAll('.memory-card');

// to manage the flipped state of the cards
let hasFlippedCard = false; /*when card is flipped = true*/
let lockBoard = false; /*will prevent flipping before cards are hidden*/
let firstCard, secondCard;

function shuffle() {
    // There are 12 cards in the game, so we will iterate through them, generate a random number between 0 and 12 and assign it to the flex-item order property:
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}
 shuffle();

function flipCard(){
    if (lockBoard) return; /*player has NOT flipped second card yet*/
    if (this === firstCard) return;
    
    this.classList.add('flip');

    if (!hasFlippedCard){
    // if the first card HAS been flipped
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    
    secondCard = this;
    // hasFlippedCard = false;
    lockBoard = true;
    
    checkForMatch();
}
// to check if cards match
function checkForMatch() {

    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    }
// when match is NOT made take off click event listener
function disableCards(){
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
    resetBoard();
}
// to flip cards back over if a match is NOT made
function unflipCards(){
    // lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
    }, 1500);
}
// function to reset cards after each round
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    // [firstCard, secondCard] = [null, null];
}
// when cards are clicked -flipCard is fired
// need to loop through them with eventListener
cards.forEach(card => card.addEventListener('click', flipCard));