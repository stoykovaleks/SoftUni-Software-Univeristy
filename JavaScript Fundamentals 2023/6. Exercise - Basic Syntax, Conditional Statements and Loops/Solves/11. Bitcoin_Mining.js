function bitcoinMining(shifts) {
    let dayCounter = 0;
    let finalPrice = 0;
    let bitcoinCount = 0;
    let bitcoinPrice = 11949.16;
    let dayOfFirstBitcoin = 0;
    let money = 0;
    let boughtBitcoin = 0;
    let sumBitcoin = 0;

    for (let i = 0; i < shifts.length; i++) {
        let minedPerDay = shifts[i];
        dayCounter++;
        money = 0;

        if (dayCounter % 3 === 0) {
            minedPerDay *= 0.70;
        }
        money = minedPerDay * 67.51;
        finalPrice += money;

        if (finalPrice >= bitcoinPrice) {
            bitcoinCount++;
            boughtBitcoin = Math.floor(finalPrice / bitcoinPrice);
            finalPrice = finalPrice - (bitcoinPrice * boughtBitcoin);
            sumBitcoin += boughtBitcoin;
        }
        if (bitcoinCount === 1) {
            dayOfFirstBitcoin = dayCounter;
        }

    }
    if (bitcoinCount !== 0) {
        console.log(`Bought bitcoins: ${sumBitcoin}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
        console.log(`Left money: ${finalPrice.toFixed(2)} lv.`);
    }
    else {
        console.log(`Bought bitcoins: ${bitcoinCount}`);
        console.log(`Left money: ${finalPrice.toFixed(2)} lv.`);
    }
}

bitcoinMining([3124.15, 504.212, 2511.124]) 