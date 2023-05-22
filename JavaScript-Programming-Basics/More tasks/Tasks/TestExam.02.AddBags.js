function addBags(input) {
    let baggagePrice = Number(input[0]);
    let kilosBaggage = Number(input[1]);
    let daysToGo = Number(input[2]);
    let countBaggage = Number(input[3]);

    let price = baggagePrice / countBaggage;

    if (kilosBaggage < 10) {
        price = baggagePrice * 0.2 * countBaggage;
    }
    else if (kilosBaggage <= 20 && kilosBaggage >= 10) {
        price = baggagePrice * 0.5 * countBaggage;
    }
    else {
        price = baggagePrice * countBaggage;
    }


    if (daysToGo < 7) {
        price *= 1.4;
    }
    else if (daysToGo >= 7 && daysToGo <= 30) {
        price *= 1.15;
    }
    else {
        price *= 1.1;
    }
    console.log(`The total price of bags is: ${(price).toFixed(2)} lv.`);
}

addBags(["25.50",
    "5",
    "36",
    "6"])
