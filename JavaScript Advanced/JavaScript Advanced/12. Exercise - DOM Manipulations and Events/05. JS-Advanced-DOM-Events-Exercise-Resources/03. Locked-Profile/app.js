function lockedProfile() {
    const buttons = Array.from(document.querySelectorAll(".profile button"));

    for (let button of buttons) {
        button.addEventListener("click", function () {
            const profile = this.parentElement;
            const unlockRadio = profile.querySelector('input[value="unlock"]');
            const hiddenFields = profile.querySelector(".profile #user1HiddenFields");
            const buttonText = this.textContent;

            if (unlockRadio.checked) {
                if (buttonText === "Show more") {
                    hiddenFields.style.display = "block";
                    this.textContent = "Hide it";
                } else if (buttonText === "Hide it") {
                    hiddenFields.style.display = "none";
                    this.textContent = "Show more";
                }
            }
        });
    }
}
