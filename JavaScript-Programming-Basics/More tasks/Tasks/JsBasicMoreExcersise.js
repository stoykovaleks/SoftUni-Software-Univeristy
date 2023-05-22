function flowers (input){
    let chrysanthemumsCount = Number (input[0]);
    let rosesCount = Number (input[1]);
    let tulipsCount = Number (input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysanthemumsPrice = 0;
    let rosesPrice = 0;
    let tulipsPrice = 0;
    let countFlowers = 0;
    let totalPrice = 0;

    switch (season){
        case "Spring":
        case "Summer":
    
            chrysanthemumsPrice = chrysanthemumsCount * 2 
            rosesPrice = rosesCount * 4.10 
            tulipsPrice = tulipsCount * 2.50 
            totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice 
            //Failure tracking
            //console.log (totalPrice)
            if (tulipsCount > 7){
                totalPrice *= 0.95
            }
            break;

        case "Autumn":
        case "Winter":
        
            chrysanthemumsPrice = chrysanthemumsCount * 3.75 
            rosesPrice = rosesCount * 4.50 
            tulipsPrice = tulipsCount * 4.15 
            totalPrice = chrysanthemumsPrice + rosesPrice + tulipsPrice
            //Failure tracking
            //console.log (totalPrice)

            if (season == "Winter" && rosesCount >= 10){
                totalPrice *= 0.9;
            }
            break;
    }


    countFlowers = chrysanthemumsCount + rosesCount + tulipsCount;

    if (countFlowers > 20){
        totalPrice *= 0.80;
    }

    if (holiday == "Y"){
        totalPrice *= 1.15
    }

    console.log (`${(totalPrice + 2).toFixed(2)}`)
}

flowers (["10", "10", "10", "Autumn", "N"])

