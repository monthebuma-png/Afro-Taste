
const form = document.querySelector("#signupForm");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  alert("Welcome to AfroTaste! You have successfully signed up.");

  form.reset();

});

