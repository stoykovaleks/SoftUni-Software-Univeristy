function fruit(fruitType, weight, pricePerKilo){
    let totalPrice = weight * (pricePerKilo/1000);

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${(weight/1000).toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80)