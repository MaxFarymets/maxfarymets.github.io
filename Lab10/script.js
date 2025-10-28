let userName = "";
while (!userName || userName.trim() === "") {
  userName = prompt("Введіть ваше ім’я:");
  if (userName === null) {
    alert("Ім’я не введено!");
  }
}
document.getElementById("userName").textContent = userName;

const images = ["grape.png", "cherry.png", "orange.png", "lemon.png", "melon.png"];

let attempts = 0;
const maxAttempts = 3;

document.getElementById("spinBtn").addEventListener("click", () => {
  if (attempts >= maxAttempts) return;

  attempts++;

  const slot1 = images[Math.floor(Math.random() * images.length)];
  const slot2 = images[Math.floor(Math.random() * images.length)];
  const slot3 = images[Math.floor(Math.random() * images.length)];

  document.getElementById("slot1").src = slot1;
  document.getElementById("slot2").src = slot2;
  document.getElementById("slot3").src = slot3;

  if (slot1 === slot2 && slot2 === slot3) {
    document.getElementById("result").textContent = `${userName} виграв!`;
    document.getElementById("result").style.color = "lime";
    document.getElementById("spinBtn").disabled = true;
  } else {
    document.getElementById("result").textContent = `${attempts} з ${maxAttempts}. Спробуй ще.`;
    document.getElementById("result").style.color = "yellow";
  }

  if (attempts === maxAttempts && slot1 !== slot2) {
    document.getElementById("spinBtn").textContent = "Гра завершена";
    document.getElementById("spinBtn").disabled = true;
    document.getElementById("spinBtn").background.color = "gray";
  }
});
