function convertToJson(firstName, lastName, hairColor){
    let obj = {
        name: firstName,
        lastName : lastName,
        hairColor:hairColor
    }
    console.log(JSON.stringify(obj));
}

convertToJson('George', 'Jones','Brown')
console.log("---------");
convertToJson('Peter', 'Smith','Blond')