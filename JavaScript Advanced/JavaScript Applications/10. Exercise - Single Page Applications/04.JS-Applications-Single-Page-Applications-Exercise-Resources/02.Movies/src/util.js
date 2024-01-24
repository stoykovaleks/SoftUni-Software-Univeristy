const views = [...document.querySelectorAll(".view-section")];

function hideAll() {
    const viewSectionHide = document.querySelectorAll(".view-section").forEach(v => v.style.display = "none");
}

export function showView(section) {
    hideAll();
    section.style.display = "block";
}

export function spinner() {
    const element = document.createElement("p");
    element.innerHTML = "Loading &hellip;"

    return element;
}

function updateNav() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        document.querySelectorAll(".user").forEach(e => e.style.display = "inline-block");
        document.querySelectorAll(".guest").forEach(e => e.style.display = "inline-none");
    }
    else {
        document.querySelectorAll(".user").forEach(e => e.style.display = "none");
        document.querySelectorAll(".guest").forEach(e => e.style.display = "inline-block");


    }
}