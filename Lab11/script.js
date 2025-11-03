$(document).ready(function() {
  const wordList = [
    { en: "flower", ua: "квітка" },
    { en: "river", ua: "річка" },
    { en: "mountain", ua: "гора" },
    { en: "forest", ua: "ліс" },
    { en: "window", ua: "вікно" },
    { en: "road", ua: "дорога" },
    { en: "bread", ua: "хліб" },
    { en: "sky", ua: "небо" },
    { en: "smile", ua: "усмішка" },
    { en: "dream", ua: "мрія" }
  ];

  let currentWord = 0;
  let correctCount = 0;
  let wrongCount = 0;

  let shuffled = wordList.sort(() => Math.random() - 0.5);

  function showWord() {
    $("#wordCard").text(shuffled[currentWord].en);
    $("#currentIndex").text(currentWord + 1);
    $("#totalWords").text(shuffled.length);
    $("#userInput").val("");
  }

  function checkAnswer() {
    const answer = $("#userInput").val().trim().toLowerCase();
    if (answer === "") return;

    const correct = shuffled[currentWord].ua.toLowerCase();

    if (answer === correct) {
      correctCount++;
      $("#good").text(correctCount);
    } else {
      wrongCount++;
      $("#bad").text(wrongCount);
    }

    if (currentWord < shuffled.length - 1) {
      currentWord++;
      showWord();
    } else {
      showFinal();
    }
  }

  function showFinal() {
    const percent = Math.round((correctCount / shuffled.length) * 100);
    let message = "";

    if (percent >= 90) message = "Відмінно!";
    else if (percent >= 50) message = "Добре!";
    else message = "Потрібно ще попрактикуватись.";

    $("#finalResult").html(`Ваш результат: ${percent}%<br>${message}`);
    $("#modalWindow").css("display", "flex").hide().fadeIn(300);
  }

  $("#btnRestart").click(function() {
    currentWord = 0;
    correctCount = 0;
    wrongCount = 0;
    $("#good").text(0);
    $("#bad").text(0);
    shuffled = wordList.sort(() => Math.random() - 0.5);
    $("#modalWindow").fadeOut(300);
    showWord();
  });

  $("#btnCheck").click(checkAnswer);
  $("#userInput").keypress(function(e) {
    if (e.which === 13) checkAnswer();
  });

  showWord();
});
