function cleverLily (input){
    let lilyYears = Number (input[0]);
    let washingMachinePrice = Number (input[1]);
    let toyPrice = Number (input[2]);

    let givenToys = 0;
    let givenMoney = 0;
    let savedMoney = 0.0;
    let moneyFromToys = 0.0;

    for (let index = 1; index <= lilyYears; index++) {
    
        if (index % 2 == 0){
            givenMoney += 10 * (index / 2) - 1;
        }
        else{
            givenToys += 1;
        }
        moneyFromToys = givenToys * toyPrice;
        savedMoney = moneyFromToys + givenMoney;
         
    }
    if (savedMoney >= washingMachinePrice){
        console.log(`Yes! ${(savedMoney - washingMachinePrice).toFixed(2)}`);
    }
    else{
        console.log (`No! ${(washingMachinePrice - savedMoney).toFixed(2)}`);
    }
    
}

cleverLily (["10", "170.00", "6"])