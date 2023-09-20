function godzillaVsKingKong(input) {
    let movieBudget = input[0];
    let statistsCount = input[1];
    let priceDressStatists = input[2];

    let decorPrice = movieBudget * 0.1;
    let sumDress = statistsCount * priceDressStatists;
    
    if (statistsCount > 150) {
        sumDress *= 0.9;
    }

    let totalSum = decorPrice + sumDress;

    if (movieBudget >= totalSum) {
        console.log('Action!');
        console.log(`Wingard starts filming with ${(movieBudget - totalSum).toFixed(2)} leva left.`);
    }
    else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - movieBudget).toFixed(2)} leva more.`)
    }
}

godzillaVsKingKong(["15437.62", "186", "57.99"])