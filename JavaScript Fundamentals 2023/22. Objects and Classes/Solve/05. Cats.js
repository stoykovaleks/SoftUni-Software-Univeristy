function cats(array){
    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const input of array) {
        let [name, age] = input.split(" ");
         
        let cat = new Cat(name, age);
        cat.meow();
    }
}

cats(['Mellow 2', 'Tom 5'])
console.log(("---------"));
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])