async function getInfo() {
    const baseUri = "http://localhost:3030/jsonstore/bus/businfo/";

    const stopIdField = document.getElementById("stopId");
    const busId = stopIdField.value;
    if (!busId) {
        appendErrorMSG(stopIdField)
    }
    const stopNameRef = document.getElementById("stopName");
    const busesRef = document.getElementById("buses");

    let response = await fetch(baseUri + busId);
    if (response.status !== 200) {
        appendErrorMSG(stopIdField)
    }

    let data = await response.json()
    stopNameRef.textContent = data.name;
    clear();

    for (let [busId, time] of Object.entries(data.buses)) {
        let li = document.createElement("li");
        li.textContent = `Bus ${busId} arrives in ${time} minutes`
        busesRef.appendChild(li)
    }
    function appendErrorMSG(input) {
        clear();
        input.textContent = "Error";
    }
    function clear() {
        stopIdField.value = "";
        busesRef.innerHTML = "";
    }
}