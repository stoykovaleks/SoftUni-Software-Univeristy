function spiceMustFlow(startingYield) {
    let totalAmount = 0;
    let yield = startingYield;
    let days = 0;

    while (yield >= 100) {
        totalAmount += yield;
        totalAmount -= 26;
        if (totalAmount <= 0) {
            totalAmount = 0;
        }
        yield -= 10;
        days++;
    }
    totalAmount -= 26;
    if (totalAmount < 0) {
        totalAmount = 0;
    }
    console.log(days);
    console.log(totalAmount);
}

spiceMustFlow(450)