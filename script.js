// need to select all of the cards
const cards = document.querySelectorAll('.memory-card');

// to manage the flipped state of the cards
let hasFlippedCard = false; /*when card is flipped = true*/
let firstCard, secondCard;

function flipCard(){
    this.classList.add('flip');
}

if (!hasFlippedCard){
    // if the first card HAS been flipped
    hasFlippedCard = true;
    firstCard = this;
}
// when cards are clicked -flipCard is fired
// need to loop through them with eventListener
cards.forEach(card => card.addEventListener('click', flipCard));