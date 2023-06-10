function sorting(array){
    let sorted = array.sort((a, b) => b - a);
    let arrLength = array.length;

    let output = [];

    for (let index = 0; index < arrLength; index++) {
        let currentNum = sorted.shift();
        let biggest = sorted.pop();
        output.push(currentNum);
        output.push(biggest);
    }
    console.log(output.join(' '));
}

sorting([1,21,3,52,69,63,31,2, 18, 94])