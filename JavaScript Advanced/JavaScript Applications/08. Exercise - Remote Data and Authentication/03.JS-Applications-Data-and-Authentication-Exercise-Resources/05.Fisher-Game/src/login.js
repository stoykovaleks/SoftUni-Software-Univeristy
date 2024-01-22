const { use } = require("chai");

document.querySelector("form").addEventListener("submit", onLogin);

async function onLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const data = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    }
    try {
        const response = await fetch(`http://localhost:3030/users/login`);
        const userData = await response.json();

        sessionStorage.setItem("email", userData.email);
        sessionStorage.setItem("userId", userData._id);
        sessionStorage.setItem("accessToken", userData.accessToken);

    }
    catch (error) {
        throw new Error("Error");
    }
    window.location.href = "/";
}