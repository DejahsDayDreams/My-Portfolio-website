const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

function validateForm() {
  const nameValue = nameInput.value.trim();
  const surnameValue = surnameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const phoneValue = phoneInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "") {
    setErrorFor(nameInput, "Name cannot be blank");
  } else {
    setSuccessFor(nameInput);
  }

  if (surnameValue === "") {
    setErrorFor(surnameInput, "Surname cannot be blank");
  } else {
    setSuccessFor(surnameInput);
  }

  if (emailValue === "") {
    setErrorFor(emailInput, "Email cannot be blank");
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(emailInput, "Email is not valid");
  } else {
    setSuccessFor(emailInput);
  }

  if (phoneValue === "") {
    setErrorFor(phoneInput, "Phone number cannot be blank");
  } else {
    setSuccessFor(phoneInput);
  }

  if (messageValue === "") {
    setErrorFor(messageInput, "Message cannot be blank");
  } else {
    setSuccessFor(messageInput);
  }

  // Submit the form if there are no errors
  if (isFormValid()) {
    form.submit();
    showSuccessMessage();
  }
}

function setErrorFor(input, message) {
  const formGroup = input.parentElement;
  const errorMessage = formGroup.querySelector(".error-message");
  formGroup.classList.add("has-error");
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formGroup = input.parentElement;
  formGroup.classList.remove("has-error");
}

function isEmailValid(email) {
  const emailPattern = /^\S+@\S+\.\S+$/;
  return emailPattern.test(email);
}

function isFormValid() {
  return !form.classList.contains("has-error");
}

function showSuccessMessage() {
  const successMessage = document.getElementById("success-message");
  successMessage.style.display = "block";
}



