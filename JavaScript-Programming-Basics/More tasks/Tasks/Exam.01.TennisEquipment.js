function tennisEquip(priceTennisRocket, countTenisRockets, countShoes) {

    let priceShoes = priceTennisRocket / 6;
    let sumTennisRockets = priceTennisRocket * countTenisRockets;
    let sumShoes = priceShoes * countShoes;
    let sumOtherEquipment = (sumShoes + sumTennisRockets) * 0.2;

    let totalSum = sumShoes + sumTennisRockets + sumOtherEquipment;

    console.log(`Price to be paid by Djokovic ${Math.floor(totalSum / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil((totalSum*7)/8)}`)
}

tennisEquip(386, 7, 4)