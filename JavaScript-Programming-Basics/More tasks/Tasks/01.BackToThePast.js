function backToThePast(input) {
    
    let money = input[0];
    let expectedYear = Number(input[1]);

    let age = 17;

    for (let index = 1800; index <= expectedYear; index++) {

        age++;

        if (index % 2 == 0){
            money -= 12000;
        }
        else {
            money -= 12000 + 50 * age;
        }
    }
    
    if (money >= 0){
        console.log (`Yes! He will live a carefree life and will have ${money.toFixed(2)} dollars left.`);
    }
    else {

        let neededMoney = Math.abs(money);

        console.log (`He will need ${neededMoney.toFixed(2)} dollars to survive.`);
    }
}

backToThePast([100000,1808]);