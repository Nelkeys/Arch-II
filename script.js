let currentQuestionIndex = 0;
let score = 0;
const maxQuestions = 25; // Set the maximum number of questions per session
let shuffledQuizData = []; // Array to hold shuffled questions

// Function to shuffle the questions
function shuffleQuestions() {
  shuffledQuizData = quizData.slice(); // Create a copy of the quizData array
  for (let i = shuffledQuizData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledQuizData[i], shuffledQuizData[j]] = [shuffledQuizData[j], shuffledQuizData[i]];
  }
}

// Function to load the current question and options
function loadQuestion() {
  const questionElement = document.getElementById("question");
  const options = document.querySelectorAll(".flex.items-center");
  const questionData = shuffledQuizData[currentQuestionIndex];

  questionElement.textContent = questionData.question;

  // Loop through options and display the available choices
  questionData.options.forEach((option, index) => {
    const optionTextElement = document.getElementById(`text-option-${index}`);
    optionTextElement.textContent = option;
    const optionElement = document.getElementById(`option-${index}`);
    optionElement.onclick = () => checkAnswer(option, optionElement);
  });

  // Update question number display
  document.getElementById("question-number").textContent = currentQuestionIndex + 1;
}

// Function to check if the selected answer is correct
function checkAnswer(selectedAnswer, optionElement) {
  const questionData = shuffledQuizData[currentQuestionIndex];
  const correctAnswer = questionData.correctAnswer;

  // Highlight the selected answer based on correctness
  const options = document.querySelectorAll(".flex.items-center");

  if (selectedAnswer !== correctAnswer) {
    optionElement.classList.add("bg-red-200");
  } else {
    optionElement.classList.add("bg-green-200");
    score++; // Increment score only if the answer is correct
  }

  // Find and highlight the correct option
  const correctOption = [...options].find((option) => {
    const optionText = option.querySelector("p");
    return optionText && optionText.textContent === correctAnswer; // Safely access optionText
  });

  if (correctOption) {
    correctOption.classList.add("bg-green-200"); // Highlight correct option in green
  }

  // Disable further selections and move to the next question after a short delay
  options.forEach((option) => {
    option.onclick = null; // Disable clicks after selection
  });

  // Move to the next question or show the final score after a delay
  setTimeout(() => {
    // Reset the styles for all options
    options.forEach((option) => {
      option.classList.remove("bg-red-200", "bg-green-200");
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuizData.length && currentQuestionIndex < maxQuestions) {
      loadQuestion();
    } else {
      displayScore(); // Show the scoreboard when the quiz ends
    }
  }, 1000); // 1-second delay before going to the next question
}

// Function to display the final score and show the scoreboard
function displayScore() {
  AOS.init();

  // Show the scoreboard
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.style.display = "flex"; // Show scoreboard

  // Calculate the score out of 70
  const totalQuestions = Math.min(shuffledQuizData.length, maxQuestions);
  const scoreOutOf70 = Math.round((score / totalQuestions) * 70);

  // Set the score in the scoreboard
  document.getElementById("score").textContent = scoreOutOf70;

  // You can also update the total questions if necessary
  document.getElementById("total-questions").textContent = totalQuestions;
}

// Function to reset the quiz
function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;

  // Shuffle questions again
  shuffleQuestions();

  // Hide the scoreboard
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.style.display = "none"; // Hide scoreboard

  // Reset the score in the scoreboard
  document.getElementById("score").textContent = "0";

  // Reload the first question
  loadQuestion();
}

// Add event listener to the "Take test again" button
document.querySelector("#scoreboard button").addEventListener("click", resetQuiz);

// Shuffle questions and load the first question on page load
shuffleQuestions();
loadQuestion();