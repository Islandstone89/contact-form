
/* Select the contact form */
let form = document.querySelector(".js-contact-form");


/* Select first name input */
let firstName = document.getElementById("fName");

/* Select first name error message */
let firstNameError = document.getElementById("firstNameError");



/* Select last name input */
let lastName = document.getElementById("lName");

/* Select first name error message */
let lastNameError = document.getElementById("lastNameError");



/* Select email input */
let email = document.getElementById("emailInput");

/* Create email validation */
let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



/* Select email error message for empty input */
let emailError = document.getElementById("emailError");

/* Select email error message for invalid email validation */
let emailValidationError = document.getElementById("emailValidationError");



/* Select General Enquiry radio button */
let radiobutton1 = document.getElementById("generalEnquiry");

/* Select Support Request radio button */
let radiobutton2 = document.getElementById("supportRequest");

/* Select radio buttons error */
let queryError = document.getElementById("queryError");



/* Select message field */
let messageField = document.getElementById("messageField");

/* Select message field error message*/
let messageError = document.getElementById("messageError");



/* Select checkbox */
let checkbox = document.getElementById("consentCheckbox");

/* Select checkbox error message */
let checkboxError = document.getElementById("checkboxError");




/* Select error messages */
let errorMessages = document.querySelectorAll(".js-error");

/* Select success message  */
let successMessage = document.querySelector(".success-message");

form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();

    if (firstName.value === "") {
        firstNameError.style.display = "block";
        firstName.setAttribute("data-error", true)
    }

    else if (firstName.value !== "") {
        firstNameError.style.display = "none";
        firstName.setAttribute("data-error", false)
    }

    if (lastName.value === "") {
        lastNameError.style.display = "block";
        lastName.setAttribute("data-error", true)
    }

    else if (lastName.value !== "") {
        lastNameError.style.display = "none";
        lastName.setAttribute("data-error", false)
    }

    if (email.value === "") {
        emailError.style.display = "block";
        email.setAttribute("data-error", true)
    }

    else if (email.value !== "") {
        emailError.style.display = "none";
    }

    if (email.value !== "" && !emailValidation.test(email.value) ) {
        emailValidationError.style.display = "block";
        }

    else if (emailValidation.test(email.value)) {
        emailValidationError.style.display = "none";
        email.setAttribute("data-error", false)
    }

    if (!radiobutton1.checked || !radiobutton2.checked) {
        queryError.style.display = "block";
    }

    else if (radiobutton1.checked || radiobutton2.checked) {
        queryError.style.display = "none";
    }

    if (messageField.value === "") {
        messageError.style.display = "block";
        messageField.setAttribute("data-error", true)
    }

    else if (messageField.value !== "") {
        messageError.style.display = "none";
        messageField.setAttribute("data-error", false)
    }

    if (!checkbox.checked) {
        checkboxError.style.display = "block";
    }

    else if (checkbox.checked) {
        checkboxError.style.display = "none";
    }

    else {
        successMessage.style.display = "block";
    }
}