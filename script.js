let currentQuestionIndex = 0;
let score = 0;

// Function to load the current question and options
function loadQuestion() {
  const questionElement = document.getElementById("question");
  const options = document.querySelectorAll(".flex.items-center");
  const questionData = quizData[currentQuestionIndex];

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
  const questionData = quizData[currentQuestionIndex];
  const correctAnswer = questionData.correctAnswer;

  // Highlight the selected answer based on correctness
  const options = document.querySelectorAll(".flex.items-center");

  // Highlight the selected option based on whether it's correct or not
  if (selectedAnswer !== correctAnswer) {
    optionElement.classList.add("bg-red-200");
  } else {
    optionElement.classList.add("bg-green-200");
    score++; // Increment score only if the answer is correct
  }

  // Find and highlight the correct option if the selected answer is wrong
  const correctOption = [...options].find(
    (option) => {
      const optionText = option.querySelector("p");
      return optionText && optionText.textContent === correctAnswer; // Safely access optionText
    }
  );
  
  if (correctOption) {
    correctOption.classList.add("bg-green-200"); // Highlight correct option in green
  }

  // Disable further selections and move to the next question after a short delay
  options.forEach((option) => {
    option.onclick = null; // Disable clicks after selection
  });

  // Move to the next question or show the final score
  setTimeout(() => {
    // Reset the styles for all options
    options.forEach((option) => {
      option.classList.remove("bg-red-200", "bg-green-200");
    });

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      displayScore(); // Show the scoreboard when the quiz ends
    }
  }, 500); // 0.5-seconds delay before going to the next question
}

// Function to display the final score and show the scoreboard
function displayScore() {
    AOS.init();
  // Hide the quiz section and show the scoreboard
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.style.display = "flex"; // Show scoreboard

  // Calculate the score out of 70
  const totalQuestions = quizData.length;
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

  // Hide the scoreboard and show the quiz section again
  document.querySelector("section").style.display = "block";
  const scoreboard = document.getElementById("scoreboard");
  scoreboard.style.display = "none"; // Hide scoreboard

  // Reset the score in the scoreboard
  document.getElementById("score").textContent = "0";
  
  // Reload the first question
  loadQuestion();
}

// Add event listener to the "Take test again" button
document.querySelector("#scoreboard button").addEventListener("click", resetQuiz);

// Load the first question on page load
loadQuestion();
