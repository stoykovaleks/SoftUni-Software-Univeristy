function lowestPriceInCities(input) {
  let obj = {};

  for (const data of arr) {
    let [townName, productName, productPrice] = data.split(" | ");
    if (!obj[productName]) {
      obj[productName] = {};
    }
    obj[productName][townName] = Number(productPrice);
  }
  let result = [];

  for (const key in obj) {
    let sorted = Object.entries(obj[key]).sort((a, b) => a[1] - b[1]);
    let [town, price] = sorted[0];
    result.push(`${key} -> ${price} (${town})`);
  }
  return result.join("\n");
}

lowestPriceInCities(['Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10']
)