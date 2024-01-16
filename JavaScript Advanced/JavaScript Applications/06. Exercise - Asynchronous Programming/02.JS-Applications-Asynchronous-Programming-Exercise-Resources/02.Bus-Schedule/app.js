function solve() {

    let baseUri = (`http://localhost:3030/jsonstore/bus/schedule`)
    const spanRef = document.querySelector("div[id='info'] span");
    let nextStop = "depot"
    const arrivedBtnRef = document.getElementById("arrive");
    const departBtnRef = document.getElementById("depart");
    let currentStop = "";

    async function depart() {
        const response = await fetch(baseUri + nextStop);
        const data = await response.json;

        spanRef.textContent = `Next stop ${data.name}`;
        nextStop = data.next;
        currentStop = data.next

        arrivedBtnRef.disable = false;
        departBtnRef.disable = true;
    }

    function arrive() {
        spanRef.textContent = `Arriving at ${currentStop}`;
        arrivedBtnRef.disable = true;
        departBtnRef.disable = false;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();