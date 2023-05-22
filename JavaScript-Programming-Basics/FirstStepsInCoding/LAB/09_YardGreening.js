function yardGreening(input){
    let squareMeteres = Number(input[0]);
    let sum = squareMeteres * 7.61;
    let totalSum = sum-(sum * 0.18);
    let discount = (sum - totalSum);
    console.log(`The final price is: ${totalSum} lv.`);
    console.log(`The discount is: ${Math.round(discount*100)/100} lv.`);

}

yardGreening(['550'])