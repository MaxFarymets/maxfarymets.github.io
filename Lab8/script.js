let userName = "";
while (!userName || userName.trim() === "") {
  userName = prompt("Введіть ваше ім’я:");
  if (userName === null) {
    alert("Ім'я не введено!");
  }
}

document.getElementById("user").querySelector(".label").textContent = userName;

const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");
const userNumEl = document.getElementById("userNum");
const compNumEl = document.getElementById("compNum");
const resultEl = document.getElementById("result");
const button = document.getElementById("generate");

let userScore = 0;
let compScore = 0;

button.addEventListener("click", () => {
  const userNum = Math.floor(Math.random() * 10) + 1;
  const compNum = Math.floor(Math.random() * 10) + 1;

  userNumEl.textContent = userNum;
  compNumEl.textContent = compNum;

  if (userNum > compNum) {
    userScore++;
    resultEl.textContent = `${userName} отримує очко!`;
  } else if (userNum < compNum) {
    compScore++;
    resultEl.textContent = `Комп’ютер отримує очко!`;
  } else {
    resultEl.textContent = `Нічия!`;
  }

  userScoreEl.textContent = userScore;
  compScoreEl.textContent = compScore;

  if (userScore === 3 || compScore === 3) {
    button.disabled = true;
    button.style.background = "#ccc";
    resultEl.textContent = userScore > compScore
      ? `${userName} переміг!`
      : `Комп’ютер переміг цього разу!`;
  }
});

