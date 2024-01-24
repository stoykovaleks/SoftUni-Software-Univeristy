import { showView } from "./util.js";
import { homePage } from "./home.js"

const loginSection = document.querySelector("#form-login");
const form = loginSection.querySelector("form");
form.addEventListener("submit", onSubmit);

export function loginPage() {
    showView(loginSection);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);

    const email = formData.get("email");
    const password = formData.get("password");

    await login(email, password);
    homePage(loginSection)
}

async function login(email, password) {
    try {
        const response = await fetch(`http://localhost:3030/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Email or Password is incorrect!');
        }

    } catch (error) {
        alert.error
        throw error
    }

}