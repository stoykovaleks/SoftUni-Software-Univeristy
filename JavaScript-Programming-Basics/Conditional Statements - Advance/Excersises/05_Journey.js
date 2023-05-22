function journey (input){
    let budget = Number (input[0]);
    let season = input[1];

    let destination = "";
    let vacantionType = "";
    let spentedSum = 0;

    switch (season){
        case "summer":
        
        if (budget <= 100){
            destination = "Somewhere in Bulgaria"
            spentedSum = budget * 0.3
            vacantionType = "Camp"
        }
        else if (budget <= 1000){
            destination = "Somewhere in Balkans"
            spentedSum = budget * 0.4
            vacantionType = "Camp"
        }
        else if (budget > 1000){
            destination = "Somewhere in Europe"
            spentedSum = budget * 0.9
            vacantionType = "Hotel"
        }
        break;

        case "winter":

        if (budget <= 100){
            destination = "Somewhere in Bulgaria"
            spentedSum = budget * 0.7
            vacantionType = "Hotel"
        }
        else if (budget <= 1000){
            destination = "Somewhere in Balkans"
            spentedSum = budget * 0.8
            vacantionType = "Hotel"
        }
        else if (budget > 1000){
            destination = "Somewhere in Europe"
            spentedSum = budget * 0.9
            vacantionType = "Hotel"
        }
        break;
    }
    console.log (destination)
    console.log (`${vacantionType} - ${(spentedSum).toFixed(2)}`)
}

journey (["678.53", "winter"])