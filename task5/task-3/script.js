const answerElements = document.querySelectorAll(".answer");
let score = 0;
const scoreDisplay = document.getElementById("score");

answerElements.forEach((answer) => {
  answer.addEventListener("click", () => {
    checkAnswer(answer);
    updateScoreDisplay();
  });
});

function checkAnswer(answerElement) {
  const isCorrect =
    answerElement.innerText.includes("Tbilisi") ||
    answerElement.innerText.includes("Mars") ||
    answerElement.innerText.includes("Leonardo da Vinci");

  if (isCorrect) {
    answerElement.classList.add("correct");
    score += 1;
  } else {
    answerElement.classList.add("incorrect");
  }
}

function updateScoreDisplay() {
  scoreDisplay.textContent = `Score: ${score}`;
}
