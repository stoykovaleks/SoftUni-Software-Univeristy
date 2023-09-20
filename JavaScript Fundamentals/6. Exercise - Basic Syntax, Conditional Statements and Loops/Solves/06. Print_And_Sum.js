function printAndSum (start, end){
    let sum = 0;
    let output = '';

    for (let nums = start; nums <= end; nums++) {
        sum += nums;
        output += nums + ' ';
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10)