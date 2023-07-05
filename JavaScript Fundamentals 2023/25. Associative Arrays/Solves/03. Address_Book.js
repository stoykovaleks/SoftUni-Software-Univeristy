function addressBook(array){
    let adressBook = {};

    for (const data of array) {
        let [name, address] = data.split(":");
        adressBook[name] = address;
    }
    let sorted = Object.keys(adressBook).sort();
    for (let key of sorted) {
       console.log(`${key} -> ${adressBook[key]}`)
    }
}

addressBook([
'Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'
])