const images = [
    { src: 'assets/image-1.png', alt: 'Image 1' },
    { src: 'assets/image-2.png', alt: 'Image 2' },
    { src: 'assets/image-3.png', alt: 'Image 3' },
    { src: 'assets/image-4.png', alt: 'Image 4' },
    { src: 'assets/image-5.png', alt: 'Image 5' },
    { src: 'assets/image-6.png', alt: 'Image 6' }
];
const cardsContainer = document.querySelector('#cards');
const doubleCards = [...images, ...images];


function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
function displayCards() {
    cardsContainer.textContent = "";

    const shuffled = shuffle(doubleCards);
    shuffled.forEach((cardData, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.name = cardData.src;
        cardElement.dataset.index = index;

        const imgElement = document.createElement('img');
        imgElement.src = cardData.src;
        imgElement.alt = cardData.alt;

        cardElement.appendChild(imgElement);
        cardsContainer.appendChild(cardElement);

        cardElement.addEventListener('click', flipCard);
    })
}
displayCards();

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!firstCard) {
        firstCard = this;
        return;
    }
    secondCard = this;

    lockBoard = true;
}
