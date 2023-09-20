function sumOfNums(input) {
    let index = 0;

    let targetNum = Number(input[index]);
    index++;

    let sum = 0;

    while (sum <= targetNum) {

        let current = Number(input[index]);
        index++;

        sum += current;

    }
    console.log(sum);
}

sumOfNums(["20",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6"])

