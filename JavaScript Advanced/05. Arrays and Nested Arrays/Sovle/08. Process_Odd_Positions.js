function processOddPositions(array){
    let doubled = [];

    for (let i = 0; i < array.length; i++) {
        if(i % 2 !== 0){
            doubled.push(array[i] * 2);
        }
        doubled.reverse();
    }
    return doubled.join(" ");
}

processOddPositions([10, 15, 20, 25])