function invertory(array) {
    let result = [];

    for (const line of array) {
        let [name, level, item] = line.split(" / ");

        let hero = {
            name: name,
            level: Number(level),
            items: item,
        };
        result.push(hero);
    }
    result.sort((a, b) => a.level - b.level);

    for (const el of result) {

        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    }
}

invertory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'
])
