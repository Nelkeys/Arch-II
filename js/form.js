// Get elements
const toggleButton = document.querySelector(".feedback-toggle");
const feedbackForm = document.getElementById("feedback-form");
const formInner = document.getElementById("feedback-form-inner");
const messageInput = document.getElementById("message");

// Toggle feedback form visibility
toggleButton.addEventListener("click", () => {
  feedbackForm.classList.toggle("hidden");
});

// Close form when clicking outside
feedbackForm.addEventListener("click", (e) => {
  if (e.target === feedbackForm) {
    feedbackForm.classList.add("hidden");
  }
});

// Handle form submission
formInner.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop default behavior
  const formData = new FormData(e.target);
  fetch(e.target.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Feedback submitted successfully!");
        messageInput.value = ""; // Clear the textarea
      } else {
        alert("An error occurred. Please try again.");
      }
      feedbackForm.classList.add("hidden"); // Hide the form after submission
    })
    .catch(() => {
      alert("An error occurred. Please try again.");
    });
});
