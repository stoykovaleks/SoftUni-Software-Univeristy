function listOfProducts(products) {

    let sorted = products.sort();

    for (let i = 0; i < products.length; i++) {
        console.log(`${i + 1}.${sorted[i]}`);
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])