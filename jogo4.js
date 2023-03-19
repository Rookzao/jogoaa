function loadQuestion() {
  resetChoices();
  questionText.innerText = questions[currentQuestion].question;
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    const choice = questions[currentQuestion].choices[i];
    const button = document.createElement("button");
    button.innerText = choice;
    button.classList.add("choice");
    button.addEventListener("click", handleChoiceClick);
    choiceContainer.appendChild(button);
  }
}

function resetChoices() {
  while (choiceContainer.firstChild) {
    choiceContainer.removeChild(choiceContainer.firstChild);
  }
}

function handleChoiceClick(event) {
  const selectedButton = event.target;
  const answer = questions[currentQuestion].answer;
  if (selectedButton.innerText === answer) {
    score++;
    scoreText.innerText = `Pontuação: ${score}`;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    alert("Fim do Jogo!");
  }
}
