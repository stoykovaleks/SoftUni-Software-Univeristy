function firstAndLastKNumbers(array) {
    let k = array[0];
    let first = array.slice(1, k + 1);
    let last = array.slice(-k)

    console.log(first.join(" "));
    console.log(last. join(" "));
}

firstAndLastKNumbers([2, 7, 8, 9])