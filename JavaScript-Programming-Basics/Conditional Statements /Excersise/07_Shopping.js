function shoping (input){
    let boudget = Number (input[0]);
    let countVideoCards = Number (input[1]);
    let countCPUs = Number (input[2]);
    let countRAMs = Number (input[3]);

    let sumVideoCard = countVideoCards * 250;
    let priceCPUs = sumVideoCard * 0.35;
    let sumCPUs = countCPUs * priceCPUs;
    let priceRAMs = sumVideoCard * 0.1;
    let sumRAMs = countRAMs * priceRAMs;

    let totalSum = sumVideoCard + sumCPUs + sumRAMs;
    
    if (countVideoCards > countCPUs){
        totalSum = totalSum - (totalSum * 0.1);
    }

    if (boudget > totalSum){
        console.log (`You have ${(boudget - totalSum).toFixed(2)} leva left!`);
    }
    else {
        console.log (`Not enough money! You need ${(totalSum - boudget).toFixed(2)} leva more!`);
    }
    console.log (totalSum);
}
shoping (["900","2","1","3"])
