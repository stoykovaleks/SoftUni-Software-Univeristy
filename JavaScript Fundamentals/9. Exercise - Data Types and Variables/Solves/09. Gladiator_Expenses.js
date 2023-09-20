function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    // let shieldBroken = 0;
    // let price = 0;

    // for (let fights = 1; fights <= lostFights; fights++) {

    //     let swordIsBroken = false;
    //     let helmetIsBroken = false;

    //     if (fights % 2 === 0) {
    //         price += helmetPrice;
    //         helmetIsBroken = true;
    //     }
    //     if (fights % 3 === 0) {
    //         price += swordPrice;
    //         swordIsBroken = true;
    //     }
    //     if (helmetIsBroken && swordIsBroken) {
    //         price += shieldPrice;
    //         shieldBroken++;
    //     }
    //     if (shieldBroken % 2 === 0 && shieldBroken !== 0) {
    //         price += armorPrice
    //         shieldBroken = 0;
    //     }
    // }

    let newAnswer = Math.floor((lostFights/2))*helmetPrice + Math.floor((lostFights/3))*swordPrice + Math.floor((lostFights/6))*shieldPrice + Math.floor((lostFights/12))*armorPrice;
    
    console.log(`Gladiator expenses: ${newAnswer.toFixed(2)} aureus`);
}

gladiatorExpenses(23,12.50,21.50,40,200)