function addItem() {
    const textAreaEl = document.getElementById("newItemText");
    const valueAreaEl = document.getElementById("newItemValue");
    const option = document.createElement("option");
    option.textContent = textAreaEl.value;
    option.value = valueAreaEl.value;

    document.getElementById("menu").appendChild(option);
    textAreaEl.value = "";
    valueAreaEl.value = "";
}