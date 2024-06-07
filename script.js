
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
let emailValidation = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";

/* Select email error message for empty input */
let emailError = document.getElementById("emailError");

/* Select email error message for invalid email validation */
let emailValidationError = document.getElementById("emailValidationError");


/* Select radio buttons */
let radioButtons = document.querySelectorAll("input[type=radio]");

/* radioButtons.forEach((radiobutton) => {
  if (radiobutton.value !== "1" || radiobutton.value !== "2")  {
    queryError.style.display = "block";
  }
})  */

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
    }

    else if (firstName.value !== "") {
        firstNameError.style.display = "none";
    }

    if (lastName.value === "") {
        lastNameError.style.display = "block";
    }

    else if (lastName.value !== "") {
        lastNameError.style.display = "none";
    }

    if (email.value === "") {
        emailError.style.display = "block";
    }

    else if (email.value !== "") {
        emailError.style.display = "none";
    }

/*     if (email.value !== "" && !emailValidation.test(email.value) ) {
        emailValidationError.style.display = "block";
        }

    else if (emailValidation.test(email.value)) {
        emailValidationError.style.display = "none";
    } */

    if (radiobutton1.checked == "false" || radiobutton2.checked == "false") {
        queryError.style.display = "block";
    }

    if (messageField.value === "") {
        messageError.style.display = "block";
    }

    else if (messageField.value !== "") {
        messageError.style.display = "none";
    }

    if (checkbox.checked === "false") {
        console.log("Testing");
    }

    else {
        successMessage.style.display = "block";
    }
}