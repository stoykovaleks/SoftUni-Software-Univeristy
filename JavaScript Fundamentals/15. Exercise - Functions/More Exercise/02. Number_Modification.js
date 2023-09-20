function numberModification(number) {
    let sum = 0;
    let digitCount = 0;

    while (true) {
        let digits = Array.from(number.toString()).map(Number);
        sum = digits.reduce((acc, digit) => acc + digit, 0);
        digitCount = digits.length;

        let average = sum / digitCount;
        if (average <= 5) {
            break;
        }
        number = parseInt(number.toString() + '9');
    }

    console.log(number);

}

numberModification(101)