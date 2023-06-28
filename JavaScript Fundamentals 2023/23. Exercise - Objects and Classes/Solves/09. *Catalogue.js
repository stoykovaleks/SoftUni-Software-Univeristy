function catalog(products) {
    const catalog = {};

    for (const product of products) {
      const [name, price] = product.split(" : ");
      const initial = name[0].toUpperCase();
  
      if (!catalog[initial]) {
        catalog[initial] = [];
      }
      catalog[initial].push({ name, price: Number(price) });
    }
  
    const sortedKeys = Object.keys(catalog).sort();
    const groupedProducts = sortedKeys.map((key) => ({
      initial: key,
      products: catalog[key].sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { ignorePunctuation: true })
      ),
    }));
  
    for (const group of groupedProducts) {
      console.log(group.initial);
      for (const product of group.products) {
        console.log(`  ${product.name}: ${product.price}`);
      }
    }
  }
  

catalog([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])