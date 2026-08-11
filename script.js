// Quiz data and answer options.
const quizQuestions = [
  {
    question: "Which star is commonly used to find north in the Northern Hemisphere?",
    answers: [
      { text: "Polaris", correct: true },
      { text: "Sirius", correct: false },
      { text: "Venus", correct: false },
      { text: "Betelgeuse", correct: false }
    ],
    explanation: "Polaris sits close to the north celestial pole, making it a reliable guide to north."
  },
  {
    question: "What instrument shows magnetic direction?",
    answers: [
      { text: "A compass", correct: true },
      { text: "A thermometer", correct: false },
      { text: "A telescope", correct: false },
      { text: "A ruler", correct: false }
    ],
    explanation: "A compass points toward magnetic north and helps people work out direction."
  },
  {
    question: "What does GPS use to calculate a location?",
    answers: [
      { text: "Satellites", correct: true },
      { text: "Wind patterns", correct: false },
      { text: "Ocean waves alone", correct: false },
      { text: "Tree rings", correct: false }
    ],
    explanation: "GPS uses signals from satellites to calculate position accurately."
  },
  {
    question: "Which ocean clue can help indicate nearby land?",
    answers: [
      { text: "Changes in birds, clouds, and waves", correct: true },
      { text: "The colour of the moon alone", correct: false },
      { text: "The length of a school day", correct: false },
      { text: "A loud engine noise", correct: false }
    ],
    explanation: "Birds, clouds, and waves can all change in ways that indicate land is close by."
  },
  {
    question: "Why should navigators use more than one clue?",
    answers: [
      { text: "To confirm their position and reduce mistakes", correct: true },
      { text: "To make the trip longer", correct: false },
      { text: "To avoid all technology", correct: false },
      { text: "To follow only one person", correct: false }
    ],
    explanation: "Using several clues helps people confirm their location and avoid errors."
  }
];

const questionText = document.getElementById("questionText");
const answerButtons = document.getElementById("answerButtons");
const questionMeta = document.getElementById("questionMeta");
const progressBar = document.getElementById("progressBar");
const scoreText = document.getElementById("score");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const results = document.getElementById("results");
const restartButton = document.getElementById("restartButton");

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function updateProgress() {
  const progressPercent = ((currentQuestionIndex + (answered ? 1 : 0)) / quizQuestions.length) * 100;
  progressBar.style.width = `${Math.max(progressPercent, 0)}%`;
  progressBar.setAttribute("aria-valuenow", String(Math.round(progressPercent)));
  progressBar.setAttribute("aria-valuetext", `Question ${Math.min(currentQuestionIndex + 1, quizQuestions.length)} of ${quizQuestions.length}`);
}

function updateScore() {
  scoreText.textContent = `${score}/${quizQuestions.length}`;
}

function shuffleAnswers(answers) {
  const copiedAnswers = [...answers];
  for (let index = copiedAnswers.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copiedAnswers[index], copiedAnswers[randomIndex]] = [copiedAnswers[randomIndex], copiedAnswers[index]];
  }
  return copiedAnswers;
}

function renderQuestion() {
  const question = quizQuestions[currentQuestionIndex];
  const shuffledAnswers = shuffleAnswers(question.answers);

  answered = false;
  feedback.classList.add("hidden");
  feedback.textContent = "";
  nextButton.classList.add("hidden");
  results.classList.add("hidden");
  restartButton.classList.add("hidden");

  questionText.textContent = question.question;
  questionMeta.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  answerButtons.innerHTML = "";

  shuffledAnswers.forEach((answer) => {
    const optionButton = document.createElement("button");
    optionButton.type = "button";
    optionButton.className = "answer-button";
    optionButton.textContent = answer.text;
    optionButton.dataset.correct = String(answer.correct);
    optionButton.addEventListener("click", handleAnswerClick);
    answerButtons.appendChild(optionButton);
  });

  updateScore();
  updateProgress();
}

function showResults() {
  questionText.textContent = "Quiz complete!";
  questionMeta.textContent = "Final score";
  answerButtons.innerHTML = "";
  results.classList.remove("hidden");
  results.textContent = `Final score: ${score} out of ${quizQuestions.length}`;
  nextButton.classList.add("hidden");
  restartButton.classList.remove("hidden");
  progressBar.style.width = "100%";
  progressBar.setAttribute("aria-valuenow", "100");
  progressBar.setAttribute("aria-valuetext", "Quiz complete");
}

function handleAnswerClick(event) {
  const selectedButton = event.currentTarget;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (answered) {
    return;
  }

  answered = true;
  const question = quizQuestions[currentQuestionIndex];

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    const isAnswerCorrect = button.dataset.correct === "true";
    button.classList.toggle("correct", isAnswerCorrect);
    if (button !== selectedButton && isAnswerCorrect) {
      button.classList.add("correct");
    }
    if (button === selectedButton && !isCorrect) {
      button.classList.add("wrong");
    }
  });

  if (isCorrect) {
    score += 1;
  }

  updateScore();
  feedback.classList.remove("hidden");
  feedback.textContent = isCorrect
    ? `Correct! ${question.explanation}`
    : `Not quite. ${question.explanation}`;

  nextButton.classList.remove("hidden");
  updateProgress();
}

function nextQuestion() {
  currentQuestionIndex += 1;

  if (currentQuestionIndex < quizQuestions.length) {
    renderQuestion();
  } else {
    showResults();
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answered = false;
  progressBar.style.width = "0%";
  progressBar.setAttribute("aria-valuenow", "0");
  progressBar.setAttribute("aria-valuetext", "Question 1 of 5");
  renderQuestion();
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

renderQuestion();

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  const detailBox = card.querySelector(".detail");
  card.addEventListener("click", () => {
    if (!detailBox) {
      return;
    }

    if (detailBox.textContent === "") {
      detailBox.textContent = card.dataset.detail;
    } else {
      detailBox.textContent = "";
    }
  });

  card.setAttribute("tabindex", "0");
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.click();
    }
  });
});
