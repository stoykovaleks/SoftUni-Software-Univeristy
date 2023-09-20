function phoneBook(input){
    let phoneBooks = {};

    for (const list of input) {
        let [name, phone] = list.split(" ");
        
        phoneBooks[name] = phone;
    }

    for (let name in phoneBooks) {
       console.log(`${name} -> ${phoneBooks[name]}`);
    }
}

phoneBook(['Tim 313131'])