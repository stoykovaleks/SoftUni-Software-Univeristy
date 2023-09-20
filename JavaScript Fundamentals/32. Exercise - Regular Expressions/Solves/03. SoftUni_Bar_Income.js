function softuniBarIncome(input) {
    let totalIncome = 0;

    for (let line of input) {
      if (line === "end of shift") {
        break;
      }
  
      let regex = /%([A-Z][a-z]+)%<([\w\s]+)>\|(\d+)\|([0-9.]+)\$/;
      let match = line.match(regex);
  
      if (match) {
        const customerName = match[1];
        const product = match[2];
        const count = Number(match[3]);
        const price = Number(match[4]);
        const totalPrice = count * price;
  
        console.log(`${customerName}: ${product} - ${totalPrice.toFixed(2)}`);
        totalIncome += totalPrice;
      }
    }
  
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
  }

softuniBarIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])