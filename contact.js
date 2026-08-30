const form = document.querySelector("#contactForm");

form.addEventListener("submit", (event) => {

  event.preventDefault();

  alert("Thank you! Your message has been sent.");

  form.reset();

});