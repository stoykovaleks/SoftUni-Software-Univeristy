function passwordValidator(password) {
    let lengthPattern = /^.{6,10}$/;
    let lettersDigitsPattern = /^[a-zA-Z0-9]+$/;
    let digitsPattern = /\d/g;

    if (!lengthPattern.test(password)) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!lettersDigitsPattern.test(password)) {
        console.log("Password must consist only of letters and digits");
    }

    if ((password.match(digitsPattern) || []).length < 2) {
        console.log("Password must have at least 2 digits");
    }

    if (
        lengthPattern.test(password) &&
        lettersDigitsPattern.test(password) &&
        (password.match(digitsPattern) || []).length >= 2
    ) {
        console.log("Password is valid");
    }
}
passwordValidator('logIn')