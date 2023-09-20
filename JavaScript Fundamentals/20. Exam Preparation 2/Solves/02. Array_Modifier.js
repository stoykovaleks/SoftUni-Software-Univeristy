function arrayModifier(input) {
    let array = input.shift().split(" ").map(Number);

    let index = 0;
    let command = input[index];

    while (command !== 'end') {
        let [action, indexOne, indexTwo] = command.split(" ");
        indexOne = Number(indexOne);
        indexTwo = Number(indexTwo);

        switch (action) {
            case 'swap':
                let swaped = array[indexOne]
                array[indexOne] = array[indexTwo];
                array[indexTwo] = swaped
                break;

            case 'multiply':
                array[indexOne] *= array[indexTwo];
                break;
            case 'decrease':
                for (let i = 0; i < array.length; i++) {
                    array[i] -= 1;
                }
                break;

        }
        index++;
        command = input[index];
    }
    console.log(array.join(", "));
}

arrayModifier(['23 -2 321 87 42 90 -123', 'swap 1 3', 'swap 3 6', 'swap 1 0', 'multiply 1 2', 'multiply 2 1', 'decrease', 'end'])
console.log("----------");
arrayModifier(['1 2 3 4', 'swap 0 1', 'swap 1 2', 'swap 2 3', 'multiply 1 2', 'decrease', 'end'])