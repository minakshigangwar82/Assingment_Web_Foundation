// Check Empty Value
function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }

    if (typeof value === "string" && value.trim() === "") {
        return true;
    }

    return false;
}

// Check Valid Email
function isValidEmail(email) {
    if (isEmpty(email)) {
        return false;
    }

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Check Valid Age
function isValidAge(age) {
    if (typeof age !== "number") {
        return false;
    }

    if (age < 1 || age > 100) {
        return false;
    }

    return true;
}

// Check Password Length
function isValidPassword(password) {
    if (isEmpty(password)) {
        return false;
    }

    if (password.length < 8) {
        return false;
    }

    return true;
}

// Testing
console.log(isEmpty(""));
console.log(isValidEmail("test@gmail.com"));
console.log(isValidAge(20));
console.log(isValidPassword("hello123"));