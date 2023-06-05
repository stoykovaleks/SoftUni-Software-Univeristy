function passwordValidator(password) {

    if (!/^.{6,10}$/.test(password)) {
        console.log("Password must be between 6 and 10 characters");
    }

    if (!/^[a-zA-Z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
    }

    if ((password.match(/\d/g) || []).length < 2) {
        console.log("Password must have at least 2 digits");
    }
    else {
        console.log("Password is valid");
    }
}
passwordValidator('logIn')