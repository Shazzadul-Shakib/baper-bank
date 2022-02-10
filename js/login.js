//! login button event handler
document.getElementById('login-button').addEventListener('click', function () {
  const emailField = document.getElementById("email-input");
  const emailId = emailField.value;  
  const passwordField = document.getElementById('password-input');
  const password = passwordField.value;
  if (emailId == 'shakib1186@gmail.com' && password == 'astro') {
    window.location.href = "banking.html";
  }
});