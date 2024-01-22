const url = ` http://localhost:3030/users`;
const endPoints = {
    logout: "logout",
}

const loginBtnRef = document.getElementById("login");
const loginRegisterBtnRef = document.getElementById("register");
const logoutBtnRef = document.getElementById("logout");
const userNameRef = document.querySelector(".email span");

logoutBtnRef.addEventListener("click", onLogout)

if (sessionStorage.getItem("userId")) {
    loginBtnRef.style.display = "none";
    loginRegisterBtnRef.style.display = "none";
    userNameRef.textContent = sessionStorage.getItem("email");
}
else {
    logoutBtnRef.style.display = "none";
    userNameRef.textContent = "guest";
}

async function onLogout(e) {
    const response = await fetch(url + endPoints.logout, {
        method: "GET",
        header: { "x-authorization": sessionStorage.getItem("accessToken") }
    })

    sessionStorage.clear();
    window.location.href = "./index.html";
}

async function onLoadAllCatches(e) {
    const allCatches = await getAllCatches();
    allCatches.forEach(element => {
        const catches = generateCatches();
        catchesRef.appendChild(catches)
    });

}

async function generateCatches(){
    const div = document.createElement("div")
    div.classList.add("catch");
    div.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="Paulo Admorim">
    <label>Weight</label>
    <input type="text" class="weight" value="636">
    <label>Species</label>
    <input type="text" class="species" value="Atlantic Blue Marlin">
    <label>Location</label>
    <input type="text" class="location" value="Vitoria, Brazil">
    <label>Bait</label>
    <input type="text" class="bait" value="trolled pink">
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="80">
    <button class="update" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Update</button>
    <button class="delete" data-id="07f260f4-466c-4607-9a33-f7273b24f1b4">Delete</button>`;

    return div;
}

async function getAllCatches() {
    const catchesUrl = `http://localhost:3030/data/catches`
    const response = await fetch(catchesUrl);
    const data = await response.json();
    return data;
}