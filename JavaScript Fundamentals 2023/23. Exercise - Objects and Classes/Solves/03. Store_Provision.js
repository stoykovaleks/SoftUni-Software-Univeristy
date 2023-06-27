function storeProvision(stockArray, orderedArray) {
    let storeStorage ={};

    for (let index = 0; index < stockArray.length; index += 2) {
        let product = stockArray[index];
        let quantity = Number(stockArray[index + 1]);
        storeStorage[product] = quantity;
    }

    for (let index = 0; index < orderedArray.length; index += 2) {
        let product = orderedArray[index];

        if (!storeStorage.hasOwnProperty(product)) {
            storeStorage[product] = 0;
        }
        storeStorage[product] += Number(orderedArray[index + 1]);
    }

    for (let key in storeStorage) {
        console.log(`${key} -> ${storeStorage[key]}`);
    }
}



storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
])