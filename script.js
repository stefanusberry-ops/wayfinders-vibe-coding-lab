// Quiz data and answer options.
const questionPool = [
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
    question: "What instrument helps a navigator detect magnetic direction?",
    answers: [
      { text: "A compass", correct: true },
      { text: "A thermometer", correct: false },
      { text: "A telescope", correct: false },
      { text: "A ruler", correct: false }
    ],
    explanation: "A compass points toward magnetic north and helps people work out direction."
  },
  {
    question: "What does GPS use to calculate a person’s location?",
    answers: [
      { text: "Satellites", correct: true },
      { text: "Wind patterns", correct: false },
      { text: "Ocean waves alone", correct: false },
      { text: "Tree rings", correct: false }
    ],
    explanation: "GPS uses signals from satellites to calculate position accurately."
  },
  {
    question: "Which clue can help a navigator notice nearby land at sea?",
    answers: [
      { text: "Changes in birds, waves, or wind", correct: true },
      { text: "The colour of the moon alone", correct: false },
      { text: "The length of a school day", correct: false },
      { text: "A loud engine noise", correct: false }
    ],
    explanation: "Birds, waves, and wind can all change in ways that indicate land is close by."
  },
  {
    question: "Why do navigators use more than one clue?",
    answers: [
      { text: "To confirm their position and reduce mistakes", correct: true },
      { text: "To make the trip longer", correct: false },
      { text: "To avoid all technology", correct: false },
      { text: "To follow only one person", correct: false }
    ],
    explanation: "Using several clues helps people confirm their location and avoid errors."
  },
  {
    question: "What is one reason star positions are useful for navigation?",
    answers: [
      { text: "They rise and set in predictable patterns", correct: true },
      { text: "They always stay in the same place every hour", correct: false },
      { text: "They can only be seen in towns", correct: false },
      { text: "They do not change with the seasons", correct: false }
    ],
    explanation: "Star positions are dependable because they move in regular, predictable ways across the sky."
  },
  {
    question: "What can swell direction help a navigator notice?",
    answers: [
      { text: "The direction of open water or the approach to land", correct: true },
      { text: "The number of clouds in the classroom", correct: false },
      { text: "The time the school bell rings", correct: false },
      { text: "The exact distance to the moon", correct: false }
    ],
    explanation: "Swell patterns can show whether a navigator is moving across open water or approaching land."
  },
  {
    question: "What is a common purpose of a travel chart or map?",
    answers: [
      { text: "To help a navigator plan a route and note landmarks", correct: true },
      { text: "To predict the weather for a year", correct: false },
      { text: "To measure the temperature of space", correct: false },
      { text: "To turn music into light", correct: false }
    ],
    explanation: "Maps help navigators match their location with the route and landmarks they need."
  },
  {
    question: "What type of knowledge is often passed down through generations in Pacific navigation traditions?",
    answers: [
      { text: "Wayfinding knowledge and ocean memory", correct: true },
      { text: "The timetable for school buses", correct: false },
      { text: "A list of all books in the library", correct: false },
      { text: "Only modern phone apps", correct: false }
    ],
    explanation: "Pacific navigation traditions often rely on careful teaching and remembered knowledge passed from one generation to the next."
  },
  {
    question: "Why do navigators pay attention to cloud patterns?",
    answers: [
      { text: "Clouds can change with land, weather, and wind conditions", correct: true },
      { text: "Clouds always show exactly where the nearest city is", correct: false },
      { text: "Clouds replace the need for maps", correct: false },
      { text: "Clouds only matter in the daytime", correct: false }
    ],
    explanation: "Clouds can reveal weather changes and clues about what may be nearby."
  },
  {
    question: "What does a compass help a traveller do?",
    answers: [
      { text: "Show direction relative to magnetic north", correct: true },
      { text: "Measure the speed of a wave", correct: false },
      { text: "Only work at sunrise", correct: false },
      { text: "Replace all natural observations", correct: false }
    ],
    explanation: "A compass is a simple tool for checking direction relative to magnetic north."
  },
  {
    question: "Why is it useful to learn the movement of stars across a night sky?",
    answers: [
      { text: "It helps a navigator estimate direction and time at sea", correct: true },
      { text: "It makes the stars stop moving", correct: false },
      { text: "It means you never need a map", correct: false },
      { text: "It only matters in the desert", correct: false }
    ],
    explanation: "Understanding star movement helps navigators estimate direction and time when travelling at night."
  },
  {
    question: "Which natural environment can provide clues for direction?",
    answers: [
      { text: "The ocean, wind, birds, and stars", correct: true },
      { text: "Only the classroom wall", correct: false },
      { text: "Only people talking loudly", correct: false },
      { text: "Only a city skyline", correct: false }
    ],
    explanation: "Nature offers multiple clues that can help a traveller work out direction and position."
  },
  {
    question: "What is one strength of combining technology with traditional knowledge?",
    answers: [
      { text: "It can improve accuracy while still respecting local knowledge", correct: true },
      { text: "It guarantees every trip is easy", correct: false },
      { text: "It removes the need for practice", correct: false },
      { text: "It makes all routes identical", correct: false }
    ],
    explanation: "Technology and tradition can work together to provide stronger, more reliable navigation."
  },
  {
    question: "Which type of information is often important for safe travel across wide ocean spaces?",
    answers: [
      { text: "Wind, swell, weather, and stars", correct: true },
      { text: "Only the colour of a backpack", correct: false },
      { text: "Only the sounds of a city", correct: false },
      { text: "Only school lunch choices", correct: false }
    ],
    explanation: "Ocean travel depends on many clues working together, including weather, sea state, and the sky."
  },
  {
    question: "What might a navigator look for when trying to identify nearby islands?",
    answers: [
      { text: "Birds, cloud shadow, water colour, or changes in swell", correct: true },
      { text: "The height of a classroom desk", correct: false },
      { text: "The number of windows in a distant building", correct: false },
      { text: "Only the sound of traffic", correct: false }
    ],
    explanation: "Nearby land often creates visible and physical changes that experienced navigators can detect."
  },
  {
    question: "What is one reason Pacific navigators memorise routes?",
    answers: [
      { text: "To keep knowledge alive and use it without relying only on devices", correct: true },
      { text: "To avoid all reading and writing", correct: false },
      { text: "To make maps impossible to understand", correct: false },
      { text: "To replace all science with story", correct: false }
    ],
    explanation: "Memory helps preserve navigation knowledge and keeps practical skills strong across generations."
  },
  {
    question: "What is a skill that helps people navigate without a screen?",
    answers: [
      { text: "Observation and memory", correct: true },
      { text: "Watching a television program", correct: false },
      { text: "Counting every step on a school hallway", correct: false },
      { text: "Only reading a map once", correct: false }
    ],
    explanation: "Observation and memory are key skills for understanding the environment without relying on technology."
  },
  {
    question: "What do modern digital maps often use to calculate location?",
    answers: [
      { text: "Satellite data and GPS signals", correct: true },
      { text: "Only the colours of the sky", correct: false },
      { text: "Only a pocket calculator", correct: false },
      { text: "Only the time on a clock", correct: false }
    ],
    explanation: "Digital maps combine location data from satellites and GPS to estimate position."
  },
  {
    question: "Why do navigators often check more than one clue before making a decision?",
    answers: [
      { text: "Because different clues can confirm or challenge a direction", correct: true },
      { text: "Because they like repeating the same task", correct: false },
      { text: "Because one clue always works perfectly", correct: false },
      { text: "Because maps do not help at all", correct: false }
    ],
    explanation: "Cross-checking clues reduces the chance of a wrong decision and improves safety."
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

const roundLength = 10;
let currentRound = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

function shuffleArray(items) {
  const copiedItems = [...items];

  for (let index = copiedItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copiedItems[index], copiedItems[randomIndex]] = [copiedItems[randomIndex], copiedItems[index]];
  }

  return copiedItems;
}

function startNewRound() {
  currentRound = shuffleArray(questionPool).slice(0, roundLength);
  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  scoreText.textContent = `0/${currentRound.length}`;
  progressBar.style.width = "0%";
  progressBar.setAttribute("aria-valuenow", "0");
  progressBar.setAttribute("aria-valuetext", `Question 1 of ${currentRound.length}`);

  renderQuestion();
}

function updateProgress() {
  const totalQuestions = currentRound.length;
  const progressPercent = ((currentQuestionIndex + (answered ? 1 : 0)) / totalQuestions) * 100;

  progressBar.style.width = `${Math.max(progressPercent, 0)}%`;
  progressBar.setAttribute("aria-valuenow", String(Math.round(progressPercent)));
  progressBar.setAttribute("aria-valuetext", `Question ${Math.min(currentQuestionIndex + 1, totalQuestions)} of ${totalQuestions}`);
}

function updateScore() {
  scoreText.textContent = `${score}/${currentRound.length}`;
}

function shuffleAnswers(answers) {
  return shuffleArray(answers);
}

function renderQuestion() {
  const question = currentRound[currentQuestionIndex];
  const shuffledAnswers = shuffleAnswers(question.answers);

  answered = false;
  feedback.classList.add("hidden");
  feedback.textContent = "";
  nextButton.classList.add("hidden");
  nextButton.textContent = "Next Question";
  results.classList.add("hidden");
  restartButton.classList.add("hidden");

  questionText.textContent = question.question;
  questionMeta.textContent = `Question ${currentQuestionIndex + 1} of ${currentRound.length}`;
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
  const totalQuestions = currentRound.length;
  const percent = (score / totalQuestions) * 100;
  let resultMessage = "Good effort — keep exploring how navigators read the world around them.";

  if (percent >= 80) {
    resultMessage = "Excellent work! You can read the sky, ocean, and tools like a strong navigator.";
  } else if (percent >= 60) {
    resultMessage = "Great job! You are building strong navigation knowledge and observation skills.";
  } else if (percent >= 40) {
    resultMessage = "Nice effort! A little more practice with signs in the sky and sea will help even more.";
  }

  questionText.textContent = "Quiz complete!";
  questionMeta.textContent = "Final score";
  answerButtons.innerHTML = "";
  results.classList.remove("hidden");
  results.textContent = `Final score: ${score} out of ${totalQuestions}. ${resultMessage}`;
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
  const question = currentRound[currentQuestionIndex];

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
    const isAnswerCorrect = button.dataset.correct === "true";
    button.classList.toggle("correct", isAnswerCorrect);
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
  if (currentQuestionIndex < currentRound.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
}

function restartQuiz() {
  startNewRound();
}

nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

// Tabs for the wayfinding learning panels.
const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTab = button.dataset.tab;

    tabButtons.forEach((tab) => {
      const isActive = tab === button;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    tabPanels.forEach((panel) => {
      const shouldShow = panel.id === `panel-${selectedTab}`;
      panel.classList.toggle("active", shouldShow);
    });
  });
});

// Click-to-reveal cards near the top of the page.
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

startNewRound();
