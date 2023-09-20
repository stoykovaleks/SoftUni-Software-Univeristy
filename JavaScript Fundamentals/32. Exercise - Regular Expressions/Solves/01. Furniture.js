function furniture(input) {
    let furniture = [];
    let totalCost = 0;

    for (let line of input) {
        if (line === "Purchase") {
            break;
        }

        let regex = />>([A-Z][a-zA-Z]+)<<(\d+(\.\d+)?)!(\d+)/;
        let match = line.match(regex);

        if (match) {
            let name = match[1];
            let price = parseFloat(match[2]);
            let quantity = parseInt(match[4]);
            let cost = price * quantity;

            furniture.push(name);
            totalCost += cost;
        }
    }

    console.log("Bought furniture:");
    if (furniture.length > 0) {
        console.log(furniture.join("\n"));
    }
    console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}

furniture([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'])