function braceletStand(input) {
    let moneyPerDay = Number(input[0]);
    let moneyGetFromSales = Number(input[1]);
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let savedMoney = 5 * moneyPerDay;
    let getMoneyTotal = 5 * moneyGetFromSales;
    let totalSavedMoney = savedMoney + getMoneyTotal;
    let totalMoneyInHand = totalSavedMoney - expenses;

    if (totalMoneyInHand >= giftPrice) {
        console.log(`Profit: ${totalMoneyInHand.toFixed(2)} BGN, the gift has been purchased.`);
    }
    else {
        console.log(`Insufficient money: ${(giftPrice - totalMoneyInHand).toFixed(2)} BGN.`);
    }
}
braceletStand(["2.10",
    "17.50",
    "20.20",
    "148.50"])