function storage(input){
    let storages = new Map();

    for (const data of input) {
        let [item, quantity] = data.split(" ");
        quantity = Number(quantity);
        
        if(storages.has(item)){
           quantity += storages.get(item);
        }
        storages.set(item, quantity);
    }

    for (let [item, quantity] of storages) {
        console.log(`${item} -> ${quantity}`);
    }
}

storage([
'tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])