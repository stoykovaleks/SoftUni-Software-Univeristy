function computerStore(input) {
    let priceWithoutTax = 0;
    let priceWithTax = 0;
    let index = 0;

    while (index < input.length) {
        let price = Number(input[index]);

        if (price <= 0) {
            console.log("Invalid price!");
            index++;
            continue;
        }
        if(isNaN(price)){
            break;
        }

        let tax = price * 0.2;
        priceWithoutTax += price;
        priceWithTax += price + tax;
        index++;
    }

    if (priceWithTax === 0) {
        console.log("Invalid order!");
        return;
    }
    let clientType = input.pop();
    let taxAmount = priceWithTax - priceWithoutTax;
    let totalWithDiscount = priceWithTax;

    if (clientType === "special") {
        totalWithDiscount *= 0.9;
    }

    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${priceWithoutTax.toFixed(2)}$`);
    console.log(`Taxes: ${taxAmount.toFixed(2)}$`);
    console.log("-----------");
    console.log(`Total price: ${totalWithDiscount.toFixed(2)}$`);
}

computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]))