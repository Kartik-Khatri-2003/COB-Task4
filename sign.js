// Select elements from the HTML
const loginText = document.querySelector(".title-text .login"); // Select the login text
const loginForm = document.querySelector("form.login"); // Select the login form
const loginBtn = document.querySelector("label.login"); // Select the login label
const signupBtn = document.querySelector("label.signup"); // Select the signup label
const signupLink = document.querySelector("form .signup-link a"); // Select the signup link inside the form

// Handle the click event for the signup button
signupBtn.onclick = (() => {
  // Slide the login form and text to the left by changing their margins
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});

// Handle the click event for the login button
loginBtn.onclick = (() => {
  // Slide the login form and text back to their original position by changing their margins
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});

// Handle the click event for the signup link
signupLink.onclick = (() => {
  // Simulate a click on the signup button
  signupBtn.click();
  // Return false to prevent the default link behavior
  return false;
});
