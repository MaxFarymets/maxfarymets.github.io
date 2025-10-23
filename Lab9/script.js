const cards = [
  { name: "6", value: 6 },
  { name: "7", value: 7 },
  { name: "8", value: 8 },
  { name: "9", value: 9 },
  { name: "10", value: 10 },
  { name: "J", value: 2 },
  { name: "Q", value: 3 },
  { name: "K", value: 4 },
  { name: "A", value: 11 }
];

const suits = ["hearts", "diamonds", "clubs", "spades"];

function getRandomCard() {
  const card = cards[Math.floor(Math.random() * cards.length)];
  const suit = suits[Math.floor(Math.random() * suits.length)];
  const img = `cards/${suit}/${card.name}.png`;
  return { ...card, suit, img };
}

let userName = "";
while (!userName || userName.trim() === "") {
  userName = prompt("Введіть ваше ім’я:");
  if (userName === null) {
    alert("Ім'я не введено!");
  }
}
document.getElementById("userName").textContent = userName;

let round = 1;
let userTotal = 0;
let compTotal = 0;

const userScore = document.getElementById("userScore");
const compScore = document.getElementById("compScore");
const userCard = document.getElementById("userCard");
const compCard = document.getElementById("compCard");
const result = document.getElementById("result");
const roundInfo = document.getElementById("roundInfo");
const button = document.getElementById("generate");

button.addEventListener("click", () => {
  if (round <= 3) {
    const user = getRandomCard();
    const comp = getRandomCard();

    userCard.src = user.img;
    compCard.src = comp.img;

    userTotal += user.value;
    compTotal += comp.value;

    userScore.textContent = userTotal;
    compScore.textContent = compTotal;

    round++;
    roundInfo.textContent = `Спроба ${round <= 3 ? round : 3} з 3`;

    if (round > 3) {
      button.disabled = true;
      button.style.background = "#aaa";

      if (userTotal > compTotal) {
        result.textContent = `${userName} переміг!`;
      } else if (userTotal < compTotal) {
        result.textContent = `Комп'ютер переміг!`;
      } else {
        result.textContent = `Нічия!`;
      }
    }
  }
});
