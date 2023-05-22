function supllysForSchool(input){
    let countPacksPens = Number (input[0]);
    let countPackMarkers = Number (input[1]);
    let countPackCleaners = Number (input[2]);
    let percentageDiscount = Number (input[3]) / 100;

    let pricePackPens = countPacksPens * 5.80;
    let pricePackMarkers = countPackMarkers * 7.20;
    let pricePackCleaner = countPackCleaners * 1.20;
    let materialsSum = pricePackPens + pricePackMarkers + pricePackCleaner;
    let totalSum = materialsSum - (materialsSum * percentageDiscount);

    console.log(totalSum);
}

supllysForSchool(["2 ","3 ","4 ","25 "])