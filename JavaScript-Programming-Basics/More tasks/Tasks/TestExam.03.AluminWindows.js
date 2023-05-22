function aluminJoinery(input) {
    let joineryCount = Number(input[0]);
    let typeJoinery = input[1];
    let deliveryType = input[2];

    let totalSum = 0;

    if (joineryCount <= 10) {
        console.log("Invalid order");
        return;
    }

    switch (typeJoinery) {
        case "90X130":
            totalSum = joineryCount * 110;

            if (joineryCount > 30 && joineryCount < 60) {
                totalSum *= 0.95;
            }
            else {
                totalSum *= 0.92;
            }
            break;

        case "100X150":
            totalSum = joineryCount * 140;

            if (joineryCount > 30 && joineryCount < 60) {
                totalSum *= 0.94;
            }
            else {
                totalSum *= 0.9;
            }
            break;

        case "130X180":
            totalSum = joineryCount * 190;

            if (joineryCount > 30 && joineryCount < 60) {
                totalSum *= 0.93;
            }
            else {
                totalSum *= 0.88;
            }
            break;
            
        case "200X300":
            totalSum = joineryCount * 250;

            if (joineryCount > 30 && joineryCount < 60) {
                totalSum *= 0.91;
            }
            else {
                totalSum *= 0.86;
            }
            break;        
    }

    if (deliveryType == "With delivery"){
        totalSum += 60
    }
    else {
        totalSum = totalSum;
    }

    if (joineryCount > 99){
        totalSum *= 0.96;
    }
    console.log(`${(totalSum).toFixed(2)} BGN`);
}

aluminJoinery(["105", "100X150", "With delivery"])