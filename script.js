
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

/* Select email error message */
let emailError = document.getElementById("emailError");



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

form.addEventListener("submit", test);

function test(e) {
    e.preventDefault();
   /*  errorMessages.forEach((error) => {{
        error.style.display = "block";
    }}) */
    successMessage.style.display = "block";

    if (firstName.value === "") {
        firstNameError.classList.toggle("hide");
    }

    else if (lastName.value === "") {
        lastNameError.classList.toggle("hide");
    }
}