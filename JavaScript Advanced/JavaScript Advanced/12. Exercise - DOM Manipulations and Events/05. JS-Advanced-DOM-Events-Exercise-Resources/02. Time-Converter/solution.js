function attachEventsListeners() {
    const daysInputEl = document.getElementById("days");
    const daysBtn = document.getElementById("daysBtn");
    const hoursInputEl = document.getElementById("hours").value;
    const hoursBtn = document.getElementById("hoursBtn");
    const minutesInputEl = document.getElementById("minutes").value;
    const minutesBtn = document.getElementById("minutesBtn");
    const secondsInputEl = document.getElementById("seconds").value;
    const secondsBtn = document.getElementById("secondsBtn");

    daysBtn.addEventListener("click", () => {
        const days = Number(daysInputEl.value);
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        hoursInputEl.value = hours;
        minutesInputEl.value = minutes;
        secondsInputEl.value = seconds;
    });

    hoursBtn.addEventListener("click", () => {
        const hours = Number(hoursInputEl.value);
        const days = hours / 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;
        daysInputEl.value = days;
        minutesInputEl.value = minutes;
        secondsInputEl.value = seconds;
    });

    minutesBtn.addEventListener("click", () => {
        const minutes = Number(minutesInputEl.value);
        const hours = minutes / 60;
        const days = hours / 24;
        const seconds = minutes * 60;
        daysInputEl.value = days;
        minutesInputEl.value = minutes;
        secondsInputEl.value = seconds;
    });

    secondsBtn.addEventListener("click", () => {
        const seconds = Number(secondsInputEl.value);
        const minutes = seconds / 60;
        const hours =  minutes/60;
        const days = hours/24;
        daysInputEl.value = days;
        minutesInputEl.value = minutes;
    });

}