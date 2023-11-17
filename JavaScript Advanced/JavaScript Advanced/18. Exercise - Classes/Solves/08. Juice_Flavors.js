function juiceFlavors(input){
    const juices = new Map();
    const bottles = new Map();

    for (const line of input) {
        const [juice, quantity] = line.split(' => ');
        const currentQuantity = juices.has(juice) ? juices.get(juice) : 0;
        const totalQuantity = Number(quantity) + currentQuantity;

        if (totalQuantity >= 1000) {
            const bottlesCount = Math.floor(totalQuantity / 1000);
            bottles.set(juice, (bottles.get(juice) || 0) + bottlesCount);
            juices.set(juice, totalQuantity % 1000);
        } else {
            juices.set(juice, totalQuantity);
        }
    }

    const result = [];
    for (const [juice, count] of bottles) {
        result.push(`${juice} => ${count}`);
    }

    return result.join('\n');
}

juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549']
)