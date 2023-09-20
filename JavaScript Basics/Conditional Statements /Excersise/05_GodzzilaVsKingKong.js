function godzzilaVsKingKong (input){
    let movieBoudget = Number (input[0]);
    let countStats = Number (input[1]);
    let priceForDress = Number (input[2]);

    let sumForDecor = movieBoudget * 0.1;
    let sumForDress = countStats * priceForDress;
    

    if (countStats > 150){
        sumForDress *= 0.9;
    }
    let totalSumForMovie = sumForDecor + sumForDress;

    if (totalSumForMovie > movieBoudget){
        console.log(`Not enough money!`);
        console.log (`Wingard needs ${(totalSumForMovie - movieBoudget).toFixed(2)} leva more.`);
    }
    else{
        console.log (`Action!`);
        console.log (`Wingard starts filming with ${(movieBoudget - totalSumForMovie).toFixed(2)} leva left.`);

    }


}
godzzilaVsKingKong(["15437.62","186","57.99"]);
