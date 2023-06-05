function oddAndEvenSum(num) {
    let numAsString = num.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let index = 0; index < numAsString.length; index++) {
        let digitNum = Number(numAsString[index]);
        if (digitNum % 2 === 0) {
            evenSum += digitNum;
        }
        else {
            oddSum += digitNum;
        }
    }
    return (`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)