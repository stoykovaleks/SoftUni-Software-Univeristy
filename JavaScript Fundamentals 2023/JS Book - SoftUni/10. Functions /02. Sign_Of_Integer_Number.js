function printSign(num) {
    if (num > 0) {
        console.log(`The number ${num} is positive.`);
    }
    else if (num === 0) {
        console.log(`The number ${num} is zero.`);
    }
    else if (num < 0) {
        console.log(`The number ${num} is negative.`);
    }
}

printSign(0);