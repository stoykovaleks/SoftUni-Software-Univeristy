function storeCatalogue(input) {
    let catalog = {};

    for (const line of input) {
        let [productName, productPrice] = line.split(' : ');
        productPrice = Number(productPrice);
        const initial = productName[0].toUpperCase();

        if (!catalog[initial]) {
            catalog[initial] = [];
        }

        catalog[initial].push({ name: productName, price: productPrice });
    }

    let sortedKeys = Object.keys(catalog).sort();

    for (const key of sortedKeys) {
        console.log(key);

        catalog[key].sort((a, b) => a.name.localeCompare(b.name))
            .forEach(product => {
                let fixedPrice = product.price.toFixed(2);
                console.log(`  ${product.name}: ${(product.price.toFixed(2))}`);
            });
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)