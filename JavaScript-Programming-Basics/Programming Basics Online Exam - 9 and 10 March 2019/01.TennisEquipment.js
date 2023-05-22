function tennisEqup(input) {

    let tennisRocketPrice = Number(input[0]);
    let countTennisRockets = Number(input[1]);
    let countShoes = Number(input[2]);

    let shoesPrice = tennisRocketPrice / 6;
    let sumForShoes = shoesPrice * countShoes;
    let sumForRockets = tennisRocketPrice * countTennisRockets;
    let equpPrice = sumForRockets + sumForShoes;
    let otherEquipment = equpPrice * 0.2;
    let totalSum = equpPrice+otherEquipment;
    let paidFromDjokovic = totalSum/8;
    let paidFromSponsors = (totalSum*7)/8;

    console.log (`Price to be paid by Djokovic ${Math.floor(paidFromDjokovic)}`);
    console.log (`Price to be paid by sponsors ${Math.ceil(paidFromSponsors)}`);
}

tennisEqup(["850", "4", "2"]);