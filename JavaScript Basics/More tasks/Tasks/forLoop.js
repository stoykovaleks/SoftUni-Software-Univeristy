function solve(input) {
    let luckyNum = 3;

    let currentNum = Number(input[0]);

    if (currentNum == luckyNum){
        console.log(`${currentNum}: is a lucky number`);
    }
    else{
        console.log(`${currentNum}: is not a lucky number`)
    }

}

solve (["3"]);