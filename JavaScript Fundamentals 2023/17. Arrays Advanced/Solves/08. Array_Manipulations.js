function arrayManipulations(input) {
    let array = input.shift().split(' ').map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, num, index] = input[i].split(' ');

        switch (command) {
            case 'Add':
                array.push(Number(num));
                break;
            case 'Remove':
                array = array.filter((el) => el !== Number(num));
                break;
            case 'RemoveAt':
                array.splice(Number(num), 1);
                break;
            case 'Insert':
                array.splice(Number(index), 0, Number(num));
                break;
        }
    }

    console.log(array.join(' '));
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])