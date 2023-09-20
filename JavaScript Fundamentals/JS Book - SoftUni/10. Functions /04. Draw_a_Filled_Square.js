function drawAFilledSquare ([n]){

    let num = parseInt(n);
    printHeaderAndFooter(num);
    printMiddleRow(num);
    printHeaderAndFooter(num);
}

function printHeaderAndFooter(num){
    console.log("-".repeat(2 * num));
}

function printMiddleRow (num){
    let line = "-";

    for (let i = 0; i < num - 1; i++) {
        line += "\\/";
    }

    line += "-";
    console.log(line);
}

drawAFilledSquare(5)