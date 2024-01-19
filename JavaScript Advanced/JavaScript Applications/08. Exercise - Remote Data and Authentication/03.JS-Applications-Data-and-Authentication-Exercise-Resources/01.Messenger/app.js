let url = `http://localhost:3030/jsonstore/messenger`;
let messages = document.getElementById("messages");

function attachEvents() {
    document.getElementById("submit").addEventListener("click", postMessage);
    document.getElementById("refresh").addEventListener("click", loadAllMessages);
}

async function loadAllMessages() {
    const res = await fetch(url)
    const data = await res.json()

    //messages
    messages.value = Object.values(data).map(({ author, content }) => `${author}: ${content}`).join("\n");
}

async function postMessage() {
    const [author, content] = [document.getElementById("author"), document.getElementById("content")];

    if (author.value !== "" || content.value !== "") {
        alert("Please enter all the required information!");
    }
    await request(url, { author: author.value, content: content.value });
    author.value = "";
    content.value = "";
}

async function request(url, option) {
    if (option) {
        option = {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(option),
        }
    }
    const response = await fetch(url, option);

    return response.json();
}


attachEvents();