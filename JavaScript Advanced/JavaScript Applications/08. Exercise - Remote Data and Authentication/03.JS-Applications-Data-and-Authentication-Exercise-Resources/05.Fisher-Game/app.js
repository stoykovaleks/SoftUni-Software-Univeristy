const { use } = require("chai");

const loginUrl = ` http://localhost:3030/users/login`;

document.querySelector("form").addEventListener("submit", onsubmit);

async function onsubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("rePass");

    if (!email || !password || rePass || password !== rePass) {
        throw new Error("Error");
    }

    const data = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "email": email,
            "password": password
        })
    }

    try {
        const response = await fetch(loginUrl, data);
        const userData = await response.json();
        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userId", userData._id);
        sessionStorage.setItem("accessToken", userData.accessToken);
    }
    catch (error) {
        throw new Error(error)
    }
}