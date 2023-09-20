function sumNumbers(input) {
    let number = input[0]
    let sum = 0;

    for (i = 0; i < number.length; i++) {

        sum += parseInt(number[i]);
    }
    console.log(`The sum of the digits is:${sum}`);
}

sumNumbers(["1234"]);