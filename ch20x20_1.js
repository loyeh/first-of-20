const username = document.getElementById("username");
const username_error = document.getElementById("_username");
const email = document.getElementById("email");
const email_error = document.getElementById("_email");
const password = document.getElementById("password");
const password_error = document.getElementById("_password");
const confirm = document.getElementById("confirm");
const confirm_error = document.getElementById("_confirm");
const submitBtn = document.getElementById("submit");

submitBtn.onclick = validityCheckAll;

function validityCheckAll() {
  usernameValidityCheck();
  emailValidityCheck();
  passwordValidityCheck();
  confirmValidityCheck();
}

function usernameValidityCheck() {
  if (!username.checkValidity()) {
    username.className = "invalid";
    username_error.style.display = "block";
  } else {
    username.className = "valid";
    username_error.style.display = "none";
  }
}
function emailValidityCheck() {
  if (!email.checkValidity()) {
    email.className = "invalid";
    email_error.style.display = "block";
  } else {
    email.className = "valid";
    email_error.style.display = "none";
  }
}
function passwordValidityCheck() {
  if (!password.checkValidity()) {
    password.className = "invalid";
    password_error.style.display = "block";
  } else {
    password.className = "valid";
    password_error.style.display = "none";
  }
}
function confirmValidityCheck() {
  if (!confirm.checkValidity() || confirm.value !== password.value) {
    confirm.className = "invalid";
    confirm_error.style.display = "block";
  } else if (confirm.value === password.value) {
    confirm.className = "valid";
    confirm_error.style.display = "none";
  }
}
