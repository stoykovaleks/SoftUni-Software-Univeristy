function fishingBoat (input){
    let budget = Number (input[0]);
    let season = input[1];
    let fishersCount = Number (input[2]);

    let totalSum = 0;

    switch (season){
        case "Spring":
            if (fishersCount <= 6){
                totalSum = 3000 * 0.9
            }
            else if (fishersCount <= 11){
                totalSum = 3000 * 0.85
            }
            else if (fishersCount >= 12){
                totalSum = 3000 * 0.75
            }
            else {
                totalSum = 3000
            }
            break;

        case "Summer":
        case "Autumn":
            if (fishersCount <= 6){
                totalSum = 4200 * 0.9
            }
            else if (fishersCount <= 11){
                totalSum = 4200 * 0.85
            }
            else if (fishersCount >= 12){
                totalSum = 4200 * 0.75
            }
            else {
                totalSum = 4200
            }
            break;

        case "Winter":
            if (fishersCount <= 6){
                totalSum = 2600 * 0.9
            }
            else if (fishersCount <= 11){
                totalSum = 2600 * 0.85
            }
            else if (fishersCount >= 12){
                totalSum = 2600 * 0.75
            }
            else {
                totalSum = 2600
            }
            break;
    }

    if (fishersCount % 2 == 0 && season != "Autumn"){
        totalSum *= 0.95
    }

    if (budget >= totalSum){
        console.log (`Yes! You have ${(budget - totalSum).toFixed(2)} leva left.`)
    }
    else{
        console.log (`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva.`)
    }
}

fishingBoat (["3600","Autumn","6"])

