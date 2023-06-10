function bombNumbers(array, bombNumAndPower){
    let sequence = array.slice(0);
    let bombNum = bombNumAndPower[0];
    let bombPower = bombNumAndPower[1]

    while(sequence.includes(bombNum)){
        let bombIndex = sequence.indexOf(bombNum);
        let leftSide = Math.max(bombIndex - bombPower, 0);
        let rightSide = Math.min(bombIndex + bombPower, sequence.length - 1);

        sequence.splice(leftSide, rightSide - leftSide + 1);
    }
    console.log(sequence.reduce((sum, num) => sum + num, 0));
}

bombNumbers([1, 2, 2, 4, 2, 2,2, 9],[4, 2])