
/* Select the contact form */
let form = document.querySelector(".js-contact-form");

/* Select error messages */
let errorMessages = document.querySelectorAll(".js-error");

/* Select success message  */
let successMessage = document.querySelector(".success-message");

form.addEventListener("submit", test);

function test(e) {
    e.preventDefault();
    errorMessages.forEach((error) => {{
        error.style.display = "block";
    }})
    successMessage.style.display = "block";
}