function foodDelivery(input){
    let countChichenMenus = Number (input[0]);
    let countFishMenus = Number (input[1]);
    let countVegetMenus = Number (input[2]);

    let chichenMenusPrice = countChichenMenus * 10.35;
    let fishMenusPrice = countFishMenus * 12.40;
    let vegetMenusPrice = countVegetMenus * 8.15;
    let totalMenusSum = chichenMenusPrice + fishMenusPrice + vegetMenusPrice;
    let desertPrice = totalMenusSum * 0.2;

    let totalDeliverySum = totalMenusSum + desertPrice + 2.50;

    console.log(totalDeliverySum);

}

foodDelivery(["2 ","4 ","3 "])
