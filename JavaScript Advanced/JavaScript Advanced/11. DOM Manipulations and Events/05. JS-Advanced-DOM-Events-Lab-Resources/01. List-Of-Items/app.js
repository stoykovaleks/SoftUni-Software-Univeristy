function addItem() {
    let input = document.getElementById("newItemText");
    let inputFieldEl = document.getElementById("newItemText").value;
    let listItems = document.getElementById("items");
    let createLi = document.createElement("li");
    
    createLi.textContent = inputFieldEl;
    listItems.appendChild(createLi);
    input.value = ""
}