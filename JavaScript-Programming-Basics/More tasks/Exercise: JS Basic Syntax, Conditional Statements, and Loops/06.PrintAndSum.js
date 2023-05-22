function printAndSum(start, end) {

    let result = 0;
    let sum = '';

    for (let nums = start; nums <= end; nums++) {

        result += nums;
        sum += nums + " ";
    }
    console.log(`${sum}`);
    console.log(`Sum: ${result}`);
}

printAndSum(5, 10)