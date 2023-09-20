function toyShop (input){
    let vacantionPrice = Number (input[0]);
    let countPuzzels = Number (input[1]);
    let countDolls = Number (input[2]);
    let countBears = Number (input[3]);
    let countMinions = Number (input[4]);
    let countTrucks = Number (input[5]);
    let discount = 0.0;
    let rent = 0.0; 

    let sumFromToys = (countPuzzels * 2.60) + (countDolls * 3) + (countBears * 4.10) + (countMinions * 8.20) + (countTrucks * 2);
    let toysCount = countPuzzels + countDolls + countBears + countMinions + countTrucks;

    if (toysCount >= 50){

        sumWithDiscount = sumFromToys *= 0.75;

    }

    rent = sumWithDiscount * 0.1;

    let profit = sumWithDiscount - rent;

    if (profit >= vacantionPrice){
        console.log (`Yes! ${(profit - vacantionPrice).toFixed(2)} lv left.`);
    }
    else {
        console.log (`Not enough money! ${(vacantionPrice - profit).toFixed(2)} lv needed.`);
    }
}

toyShop (["40.8","20","25","30","50","10"])
