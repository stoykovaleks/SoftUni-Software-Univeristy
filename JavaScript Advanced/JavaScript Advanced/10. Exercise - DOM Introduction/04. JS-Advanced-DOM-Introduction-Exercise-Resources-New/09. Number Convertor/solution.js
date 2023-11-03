function solve() {
    const firstOptEl = document.createElement("option");
    const secondOptEl = document.createElement("option");
    firstOptEl.value = "binary";
    secondOptEl.value = "hexadecimal";
    firstOptEl.innerHTML = "Binary";
    secondOptEl.innerHTML = "Hexadecimal";

    const menuToEl = document.getElementById("selectMenuTo");
    menuToEl.appendChild(firstOptEl);
    menuToEl.appendChild(secondOptEl);

    const btn = document.getElementsByTagName("button")[0];

    btn.addEventListener('click', () => {
        const numInput = document.getElementById("input");

        const outputResult = document.getElementById("result");
        if(menuToEl.value === "binary"){
            outputResult.value = Number(numInput.value).toString(2);
        }
        else if (menuToEl.value === "hexadecimal"){
            outputResult.value = Number(numInput.value).toString(16).toUpperCase();
        }
    })
}