function minerTask(input) {
    let resources = {};

    for (let index = 0; index < input.length; index += 2) {
        let resource = input[index];
        let quantity = Number(input[index + 1]);

        if(resources[resource]){
            resources[resource] += quantity;
        }
        else{
            resources[resource] = quantity;
        }
    }
    for (const key in resources) {
        console.log(`${key} -> ${resources[key]}`);
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])