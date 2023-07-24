const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const errorLabel = document.getElementById("errorLabel");
const container = document.getElementById("container");
const success = document.getElementById("success");
const dismiss = document.getElementById("dismiss");

function subscribe(event) {
  event.preventDefault();

  let emailValue = emailInput.value.trim();
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "") {
    errorLabel.style.display = "flex";
  } else if (!emailRegex.test(emailValue)) {
    errorLabel.style.display = "flex";
  } else {
    errorLabel.style.display = "none";
    form.reset();
    container.style.display = "none";
    success.style.display = "flex";
  }
}

function reset(event) {
  event.preventDefault();

  container.style.display = "flex";
  success.style.display = "none";
}

form.addEventListener("submit", subscribe);
dismiss.addEventListener("click", reset);
