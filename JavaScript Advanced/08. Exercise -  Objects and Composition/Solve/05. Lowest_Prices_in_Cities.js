function lowestPriceInCities(input) {
    let products = {};

    for (const data of input) {
      let [townName, productName, productPrice] = data.split(' | ');
      priceNum = Number(productPrice);
      
      if (!products[productName] || priceNum < products[productName].price) {
        products[productName] = { price: priceNum, town: townName };
      }
    }
  
    for (const product in products) {
      let { town, price } = products[product];
      console.log(`${product} -> ${price} (${town})`);
    }
  }

lowestPriceInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)