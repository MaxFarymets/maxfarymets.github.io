$(document).ready(function() {
  const wordSets = {
    easy: [
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
    ],
    medium: [
      { en: "always", ua: "завжди" },
      { en: "beautiful", ua: "гарний" },
      { en: "weather", ua: "погода" },
      { en: "freedom", ua: "свобода" },
      { en: "happiness", ua: "щастя" },
      { en: "knowledge", ua: "знання" },
      { en: "language", ua: "мова" },
      { en: "memory", ua: "пам’ять" },
      { en: "strength", ua: "сила" },
      { en: "success", ua: "успіх" }
    ],
    hard: [
      { en: "consciousness", ua: "свідомість" },
      { en: "responsibility", ua: "відповідальність" },
      { en: "achievement", ua: "досягнення" },
      { en: "improvement", ua: "удосконалення" },
      { en: "determination", ua: "рішучість" },
      { en: "gratitude", ua: "вдячність" },
      { en: "curiosity", ua: "цікавість" },
      { en: "generosity", ua: "щедрість" },
      { en: "confidence", ua: "впевненість" },
      { en: "perseverance", ua: "наполегливість" }
    ]
  };

  let wordList = [];
  let currentWord = 0;
  let correctCount = 0;
  let wrongCount = 0;

  function init(level) {
    wordList = wordSets[level].sort(() => Math.random() - 0.5);
    currentWord = 0;
    correctCount = 0;
    wrongCount = 0;
    $("#good").text(0);
    $("#bad").text(0);
    $("#modalWindow").hide();
    showWord();
  }

  function showWord() {
    $("#wordCard").text(wordList[currentWord].en);
    $("#currentIndex").text(currentWord + 1);
    $("#totalWords").text(wordList.length);
    $("#userInput").val("");
  }

  function checkAnswer() {
    const answer = $("#userInput").val().trim().toLowerCase();
    if (answer === "") return;

    const correct = wordList[currentWord].ua.toLowerCase();

    if (answer === correct) {
      correctCount++;
      $("#good").text(correctCount);
    } else {
      wrongCount++;
      $("#bad").text(wrongCount);
    }

    if (currentWord < wordList.length - 1) {
      currentWord++;
      showWord();
    } else {
      showFinal();
    }
  }

  function showFinal() {
    const percent = Math.round((correctCount / wordList.length) * 100);
    let message = "";

    if (percent >= 90) message = "Відмінно!";
    else if (percent >= 50) message = "Добре!";
    else message = "Потрібно ще попрактикуватись.";

    $("#finalResult").html(`Ваш результат: ${percent}%<br>${message}`);
    $("#modalWindow").fadeIn(300);
  }

  $("#btnCheck").click(checkAnswer);
  $("#userInput").keypress(function(e) {
    if (e.which === 13) checkAnswer();
  });

  $("#btnRestart").click(function() {
    const selectedLevel = $("input[name='level']:checked").val();
    init(selectedLevel);
  });

  $("input[name='level']").change(function() {
    const selectedLevel = $(this).val();
    init(selectedLevel);
  });

  init("easy");
});
