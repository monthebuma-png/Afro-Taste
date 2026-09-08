const form = document.querySelector("#signupForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    // Save the user's login details
    localStorage.setItem("afroTasteEmail", email);
    localStorage.setItem("afroTastePassword", password);

    alert("Welcome to AfroTaste! You have successfully signed up.");

    // Return to homepage
    window.location.href = "index.html";
});