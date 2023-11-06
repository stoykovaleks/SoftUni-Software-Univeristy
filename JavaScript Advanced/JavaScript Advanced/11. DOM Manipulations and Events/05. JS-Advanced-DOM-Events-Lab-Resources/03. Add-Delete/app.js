function solve() {
    let input = document.getElementById("newItemText");
    let newElement = document.getElementById("newItemText").value;
    let list = document.getElementById("items");

    let listItem = document.createElement("li");
    listItem.textContent = newElement;

    input.value = ""

    let remove = document.createElement("a");
    let linkText = document.createTextNode("[Delete]");

    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener("click", deleteItem)

    listItem.appendChild(remove);
    list.appendChild(listItem);

    function deleteItem(){
        listItem.remove();
    }
}