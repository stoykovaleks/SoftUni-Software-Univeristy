function addItem() {
    const text = document.getElementById('newItemText');
    const newLListItemEl = document.createElement('li');

    const newElementContent = document.createTextNode(text.value);
    newLListItemEl.appendChild(document.createTextNode(text));

    if(text.value !== ''){
        const listOfItems = document.getElementById('items');
        listOfItems.appendChild(newLListItemEl);
        text.value = '';
    }
}