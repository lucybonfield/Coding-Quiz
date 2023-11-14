// Define variables
const startButton = document.getElementById('start');
const choice1 = document.getElementById("choice-1");
const choice2 = document.getElementById("choice-2");
const pageText = document.querySelector("#page-text");
const timeDisplay = document.getElementById('time');
const endScreen = document.getElementById('end-screen');

let timer;
let timeLeft = 0;
let score = 0;
let questionsArray = [];
let currentQuestion;

function fetchQuestions() {
  questionsArray = [...questions];
}

function setupQuestion() {
  currentQuestion = questionsArray.shift(); // Get the next question

  if (currentQuestion) {
    pageText.textContent = currentQuestion.question;

    choice1.textContent = currentQuestion.choices[0];
    choice2.textContent = currentQuestion.choices[1];
    choice1.addEventListener("click", handleChoiceClick);
    choice2.addEventListener("click", handleChoiceClick);
  } else {
    endQuiz();
  }
}

function startQuiz() {
  timeLeft = 60; // total timer length
  currentQuestionIndex = 0;
  score = 0;
  endScreen.classList.add('hide');

  fetchQuestions();
  setupQuestion();

  startTimer();

  startButton.style.display = "none";
  choice1.style.display = "inline";
  choice2.style.display = "inline";
}

function startTimer() {
  timer = setInterval(function () {
    if (timeLeft <= 0) {
      endQuiz();
    } else {
      timeLeft--;
      timeDisplay.textContent = timeLeft;
    }
  }, 1000);
}

function handleChoiceClick() {
  const selectedChoice = this.textContent; // 'this' refers to the clicked button
  if (selectedChoice === currentQuestion.choices[currentQuestion.correctAnswerIndex]) {
    score++;
  }
  choice2.style.display = "none";
  choice1.innerHTML = "Next Question";
  choice1.style.display = "inline";
  choice2.style.display = "inline";
  // Remove event listeners to prevent multiple clicks
  choice1.removeEventListener("click", handleChoiceClick);
  choice2.removeEventListener("click", handleChoiceClick);
  setupQuestion();
}

function endQuiz() {
  clearInterval(timer); // Stop the timer

  if (timeLeft <= 0) {
    pageText.textContent = "You've run out of time! Your score is " + score + ".";
  } else {
    pageText.textContent = "Well done! You completed the quiz! Your score is " + score + ".";
  }
  
  timeDisplay.textContent = "0";
  choice1.innerHTML = "Play again";
  choice2.style.display = "none";
  choice1.addEventListener("click", startQuiz);
}

// Initialize your quiz
startButton.addEventListener('click', startQuiz);