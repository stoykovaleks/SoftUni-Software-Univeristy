function createPerson(firstName, lastName) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        },
        set fullName(value) {
            let names = value.split(' ');
            if (names.length === 2) {
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    };
    return person;
}

// Example usage:
let person = createPerson("Peter", "Ivanov");
console.log(person.fullName); // Peter Ivanov

person.firstName = "George";
console.log(person.fullName); // George Ivanov

person.lastName = "Peterson";
console.log(person.fullName); // George Peterson

person.fullName = "Nikola Tesla";
console.log(person.firstName); // Nikola
console.log(person.lastName); // Tesla
