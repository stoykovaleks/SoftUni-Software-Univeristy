function validate() {
    const emailInput = document.getElementById("email");

    emailInput.addEventListener("change", function () {
        const emailValue = emailInput.value;
        const isValid = validateEmail(emailValue);

        if (!isValid) {
            emailInput.classList.add("error");
        } else {
            emailInput.classList.remove("error");
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        return emailRegex.test(email);
    }
}