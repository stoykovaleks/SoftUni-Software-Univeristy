function basketballEquip(input){
    let yearlyTax = Number (input[0]);

    let shoesPrice = yearlyTax * 0.6;
    let equipPrice = shoesPrice * 0.8;
    let ballPrice = equipPrice / 4;
    let accsessPrice = ballPrice / 5;
    let totalSum = yearlyTax + shoesPrice + equipPrice + ballPrice + accsessPrice;


    console.log(totalSum);
}

basketballEquip(['365']);