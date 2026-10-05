const registrationForm = document.getElementById("registrationForm");

const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const dateOfBirth = document.getElementById("dateOfBirth");
const country = document.getElementById("country");
const terms = document.getElementById("terms");

const strengthText = document.getElementById("strengthText");
const strengthBar = document.getElementById("strengthBar");

const successMessage = document.getElementById("successMessage");

function showError(input, message) {
    input.classList.add("invalid");
    input.classList.remove("valid");

    const errorElement = document.getElementById(
        `${input.id}Error`
    );

    errorElement.textContent = message;
}

function showSuccess(input) {
    input.classList.remove("invalid");
    input.classList.add("valid");

    const errorElement = document.getElementById(
        `${input.id}Error`
    );

    errorElement.textContent = "";
}

function validateName(input) {

    if (input.value.trim() === "") {
        showError(input, "This field is required.");
        return false;
    }

    if (input.value.trim().length < 2) {
        showError(input, "Must contain at least 2 characters.");
        return false;
    }

    showSuccess(input);
    return true;
}

function validateEmail() {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
        showError(email, "Email is required.");
        return false;
    }

    if (!emailPattern.test(email.value.trim())) {
        showError(email, "Enter a valid email address.");
        return false;
    }

    showSuccess(email);
    return true;
}

function validatePhone() {

    const phonePattern = /^[0-9+\s()-]{7,}$/;

    if (phone.value.trim() === "") {
        showError(phone, "Phone number is required.");
        return false;
    }

    if (!phonePattern.test(phone.value.trim())) {
        showError(phone, "Enter a valid phone number.");
        return false;
    }

    showSuccess(phone);
    return true;
}

function updatePasswordStrength() {

    const value = password.value;

    if (value.length === 0) {
        strengthText.textContent = "—";
        strengthText.style.color = "#59636e";
        strengthBar.style.width = "0%";
        return;
    }

    let strength = 0;

    if (value.length >= 8) {
        strength++;
    }

    if (/[a-z]/.test(value)) {
        strength++;
    }

    if (/[A-Z]/.test(value)) {
        strength++;
    }

    if (/[0-9]/.test(value)) {
        strength++;
    }

    if (/[^A-Za-z0-9]/.test(value)) {
        strength++;
    }

    if (strength <= 2) {
        strengthText.textContent = "Weak";
        strengthText.style.color = "#e45c70";
        strengthBar.style.width = "30%";
        strengthBar.style.background = "#e45c70";
    } else if (strength <= 4) {
        strengthText.textContent = "Medium";
        strengthText.style.color = "#e7b84d";
        strengthBar.style.width = "65%";
        strengthBar.style.background = "#e7b84d";
    } else {
        strengthText.textContent = "Strong";
        strengthText.style.color = "#53cf8c";
        strengthBar.style.width = "100%";
        strengthBar.style.background = "#53cf8c";
    }
}

function validatePassword() {

    if (password.value === "") {
        showError(password, "Password is required.");
        return false;
    }

    if (password.value.length < 8) {
        showError(
            password,
            "Password must contain at least 8 characters."
        );
        return false;
    }

    showSuccess(password);
    return true;
}

function validateConfirmPassword() {

    if (confirmPassword.value === "") {
        showError(
            confirmPassword,
            "Please confirm your password."
        );
        return false;
    }

    if (confirmPassword.value !== password.value) {
        showError(
            confirmPassword,
            "Passwords do not match."
        );
        return false;
    }

    showSuccess(confirmPassword);
    return true;
}

function validateDate() {

    if (dateOfBirth.value === "") {
        showError(
            dateOfBirth,
            "Date of birth is required."
        );
        return false;
    }

    showSuccess(dateOfBirth);
    return true;
}

function validateCountry() {

    if (country.value === "") {
        showError(
            country,
            "Please select your country."
        );
        return false;
    }

    showSuccess(country);
    return true;
}

function validateGender() {

    const selectedGender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    const genderError =
        document.getElementById("genderError");

    if (!selectedGender) {
        genderError.textContent =
            "Please select your gender.";
        return false;
    }

    genderError.textContent = "";
    return true;
}

function validateTerms() {

    const termsError =
        document.getElementById("termsError");

    if (!terms.checked) {
        termsError.textContent =
            "You must accept the terms and conditions.";
        return false;
    }

    termsError.textContent = "";
    return true;
}

password.addEventListener(
    "input",
    updatePasswordStrength
);

registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const firstNameValid =
            validateName(firstName);

        const lastNameValid =
            validateName(lastName);

        const emailValid =
            validateEmail();

        const phoneValid =
            validatePhone();

        const passwordValid =
            validatePassword();

        const confirmPasswordValid =
            validateConfirmPassword();

        const dateValid =
            validateDate();

        const countryValid =
            validateCountry();

        const genderValid =
            validateGender();

        const termsValid =
            validateTerms();

        if (
            firstNameValid &&
            lastNameValid &&
            emailValid &&
            phoneValid &&
            passwordValid &&
            confirmPasswordValid &&
            dateValid &&
            countryValid &&
            genderValid &&
            termsValid
        ) {

            successMessage.classList.add("show");

            registrationForm.reset();

            firstName.classList.remove("valid");
            lastName.classList.remove("valid");
            email.classList.remove("valid");
            phone.classList.remove("valid");
            password.classList.remove("valid");
            confirmPassword.classList.remove("valid");
            dateOfBirth.classList.remove("valid");
            country.classList.remove("valid");

            strengthText.textContent = "—";
            strengthText.style.color = "#59636e";

            strengthBar.style.width = "0%";
        }
    }
);