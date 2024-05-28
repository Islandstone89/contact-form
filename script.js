
/* Select the contact form */
let form = document.querySelector(".js-contact-form");

/* Select error messages */
let errorMessages = document.querySelectorAll(".js-error");

form.addEventListener("submit", test);

function test(e) {
    e.preventDefault();
    errorMessages.forEach((error) => {{
        error.style.display = "block";
    }})
}