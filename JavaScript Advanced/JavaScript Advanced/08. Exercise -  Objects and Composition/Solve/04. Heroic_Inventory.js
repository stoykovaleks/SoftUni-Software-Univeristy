function registerHeroes(input){
    let result = [];

    for (let data of input) {
        let [name, level, items] = data.split(" / ");
        level = Number(level);
        if (items !== undefined){
            items = items.split(", ");
        }
        else{
            items = [];
        }

        result.push({name: name, level: level, items})
    }
    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)