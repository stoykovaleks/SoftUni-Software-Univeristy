function sameNumbers(num) {
    let numAsString = num.toString();
    let firstChar = numAsString[0];
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++) {
        if (numAsString[i] !== firstChar) {
            isSame = false;
        }
        sum += Number(numAsString[i]);
    }
    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222222)