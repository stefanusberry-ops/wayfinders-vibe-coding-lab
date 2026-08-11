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
  },
  {
    question: "What is a map most useful for when navigating?",
    answers: [
      { text: "Showing routes, landmarks, and position", correct: true },
      { text: "Predicting the weather for a year", correct: false },
      { text: "Measuring the temperature of space", correct: false },
      { text: "Turning music into light", correct: false }
    ],
    explanation: "Maps help people compare where they are with the route they need to follow."
  },
  {
    question: "Why do sailors often check the wind direction?",
    answers: [
      { text: "It can help them understand speed, travel direction, and conditions", correct: true },
      { text: "It tells them exactly how long a day is", correct: false },
      { text: "It always marks the nearest city", correct: false },
      { text: "It removes the need for a map", correct: false }
    ],
    explanation: "Wind direction and strength provide important information about the journey and conditions."
  },
  {
    question: "What does a sextant help measure?",
    answers: [
      { text: "The angle of a star above the horizon", correct: true },
      { text: "The depth of a riverbed", correct: false },
      { text: "The brightness of a computer screen", correct: false },
      { text: "The time in a classroom", correct: false }
    ],
    explanation: "A sextant measures angles between a star and the horizon to estimate position."
  },
  {
    question: "Why are landmarks important for navigation?",
    answers: [
      { text: "They help people recognise where they are and guide their route", correct: true },
      { text: "They always move with the tide", correct: false },
      { text: "They remove the need for directions", correct: false },
      { text: "They are only useful in cities", correct: false }
    ],
    explanation: "Landmarks provide familiar reference points that help confirm location."
  },
  {
    question: "What is a key benefit of using both natural and technological clues?",
    answers: [
      { text: "It makes navigation more reliable", correct: true },
      { text: "It guarantees every trip is easy", correct: false },
      { text: "It replaces all travel planning", correct: false },
      { text: "It means no one needs a route", correct: false }
    ],
    explanation: "Combining clues reduces uncertainty and helps navigators cross-check their position."
  },
  {
    question: "Which statement about GPS is correct?",
    answers: [
      { text: "It can help people locate themselves using satellite signals", correct: true },
      { text: "It works only when the sun is directly overhead", correct: false },
      { text: "It is powered only by ocean waves", correct: false },
      { text: "It is a type of compass", correct: false }
    ],
    explanation: "GPS uses satellite signals to work out a location anywhere the signal is available."
  },
  {
    question: "How can clouds help with navigation?",
    answers: [
      { text: "They can hint at weather changes and nearby land or storms", correct: true },
      { text: "They always show the exact direction to the equator", correct: false },
      { text: "They can replace a map completely", correct: false },
      { text: "They only matter at night", correct: false }
    ],
    explanation: "Cloud patterns can help people notice changing weather and possible land or storm conditions."
  },
  {
    question: "Which tool is best for checking direction quickly in an emergency?",
    answers: [
      { text: "A compass", correct: true },
      { text: "A backpack", correct: false },
      { text: "A notebook only", correct: false },
      { text: "A calculator", correct: false }
    ],
    explanation: "A compass gives quick direction information when a traveller needs a fast check."
  },
  {
    question: "Why are stars useful for navigation at night?",
    answers: [
      { text: "They are steady reference points in the sky", correct: true },
      { text: "They always stay at the same distance from Earth", correct: false },
      { text: "They only appear in one part of the world", correct: false },
      { text: "They remove the need for any other clue", correct: false }
    ],
    explanation: "Stars provide dependable points in the sky that can help travellers find direction."
  },
  {
    question: "What does the term 'course' mean in navigation?",
    answers: [
      { text: "The path or direction you are trying to travel", correct: true },
      { text: "The amount of food you carry", correct: false },
      { text: "A type of weather report", correct: false },
      { text: "The same as a mountain peak", correct: false }
    ],
    explanation: "A course is the planned direction or route of travel."
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
