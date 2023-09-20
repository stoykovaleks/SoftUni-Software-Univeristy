function houseParty(arr) {
  let guests = [];

  for (let person of arr) {
    let info = person.split(' ');
    let name = info[0];

    if (info.includes('not')) {

      if (guests.includes(name)) {
        let nameIndex = guests.indexOf(name);

        if (nameIndex !== -1) {
          guests.splice(nameIndex, 1);
        }

      } else {
        console.log(`${name} is not in the list!`);
      }
    } else {
      if(guests.includes(name)) {
        console.log(`${name} is already in the list!`);
      }
      else {
        guests.push(name);
      }
    }
  }
  guests.forEach(person => console.log((person)));
}
houseParty(['Allie is going!',
  'George is going!',
  'John is not going!',
  'George is not going!'])