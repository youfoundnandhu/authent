function validateForm() {
    var username = document.forms[0]["username"].value;
    var password = document.forms[0]["password"].value;
    var confirmPassword = document.forms[0]["confirm_password"].value;
    var isValid = true;

    // Reset error messages
    clearErrors();

    // Username validation
    if (username.trim() === "") {
        displayError("username", "Please enter a username");
        isValid = false;
    } else if (username.length < 3) {
        displayError("username", "Username must be at least 3 characters long");
        isValid = false;
    }

    // Password validation
    if (password.trim() === "") {
        displayError("password", "Please enter a password");
        isValid = false;
    } else if (password.length < 6) {
        displayError("password", "Password must be at least 6 characters long");
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword.trim() === "") {
        displayError("confirm_password", "Please confirm your password");
        isValid = false;
    } else if (password !== confirmPassword) {
        displayError("confirm_password", "Passwords do not match");
        isValid = false;
    }

    return isValid;
}

function validateLoginForm() {
    var username = document.forms[0]["username"].value;
    var password = document.forms[0]["password"].value;
    var isValid = true;

    // Reset error messages
    clearErrors();

    // Username validation
    if (username.trim() === "") {
        displayError("username", "Please enter a username");
        isValid = false;
    }

    // Password validation
    if (password.trim() === "") {
        displayError("password", "Please enter a password");
        isValid = false;
    }

    return isValid;
}

function displayError(field, message) {
    var element = document.getElementsByName(field)[0];
    var helpBlock = element.parentNode.querySelector(".help-block");
    element.parentNode.classList.add("has-error");
    helpBlock.textContent = message;
}

function clearErrors() {
    var errorElements = document.getElementsByClassName("has-error");
    var helpBlocks = document.getElementsByClassName("help-block");

    // Remove has-error class
    Array.from(errorElements).forEach(function(element) {
        element.classList.remove("has-error");
    });

    // Clear error messages
    Array.from(helpBlocks).forEach(function(element) {
        element.textContent = "";
    });
} 