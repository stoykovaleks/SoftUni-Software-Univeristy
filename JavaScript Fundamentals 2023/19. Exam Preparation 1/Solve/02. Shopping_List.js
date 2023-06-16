function shopingList(array) {
    let products = array.shift().split("!");

    let index = 0;
    let command = array[index];

    while (command !== "Go Shopping!") {
        let [action, item, newItem] = command.split(" ");

        switch (action) {
            case "Urgent":
                if (!products.includes(item)) {
                    products.unshift(item);
                }
                break;

            case "Unnecessary":
                if (products.includes(item)) {
                    let i = products.indexOf(item);
                    products.splice(i, 1);
                }
                break;

            case "Correct":
                if (products.includes(item)) {
                    let i = products.indexOf(item);
                    products[i] = newItem;
                }
                break;

            case "Rearrange":
                if (products.includes(item)) {
                    let i = products.indexOf(item);
                    products.splice(i, 1);
                    products.push(item);
                }
                break;
        }
        index++;
        command = array[index];
    }
    console.log(products.join(", "));
}

shopingList(["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"])
console.log('--------------------------------------');
shopingList(["Milk!Pepper!Salt!Water!Banana", "Urgent Salt", "Unnecessary Grapes", "Correct Pepper Onion", "Rearrange Grapes", "Correct Tomatoes Potatoes", "Go Shopping!"])