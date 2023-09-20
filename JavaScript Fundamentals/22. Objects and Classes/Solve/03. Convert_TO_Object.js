function convertToObject(json){
    let person = JSON.parse(json);
    let object = Object.entries(person);
    
    for (let [key, value] of object) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')