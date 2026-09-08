const form = document.querySelector("#loginForm");
const password = document.querySelector("#password");
const togglePassword = document.querySelector("#togglePassword");

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const enteredPassword = password.value;

    const savedEmail = localStorage.getItem("afroTasteEmail");
    const savedPassword = localStorage.getItem("afroTastePassword");

    if (!savedEmail || !savedPassword) {
        alert("No account found. Please sign up first.");
        return;
    }

    if (email === savedEmail && enteredPassword === savedPassword) {
        alert("Welcome back to AfroTaste! You have successfully logged in.");

        window.location.href = "index.html";
    } else {
        alert("Incorrect email or password. Please try again.");
    }
});