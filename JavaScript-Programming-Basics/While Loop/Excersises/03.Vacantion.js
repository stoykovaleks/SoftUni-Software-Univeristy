function vacantion(input) {
    let index = 0;

    let neededSum = Number(input[index]);
    index++;

    let moneyOnHand = Number(input[index]);
    index++;

    let spendDays = 0;
    let days = 0;

    while (moneyOnHand < neededSum) {

       let movement = input[index];
        index++;

       let sum = Number(input[index]);
        index++;

        if (movement == "spend") {
            moneyOnHand -= sum;
            spendDays++;
        }
        else if (movement == "save") {
            moneyOnHand += sum;
        }

        if (moneyOnHand <= 0) {
            moneyOnHand = 0;
        }

        days++;
    }

    if (moneyOnHand >= neededSum) {
        console.log(`You saved the money for ${days} days.`);
    }

    if (spendDays >= 5) {
        console.log(`You can't save the money.`);
        console.log(spendDays);
    }
}

vacantion([
    "110",
    "60",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "save",
    "10", "spend", "10"])





