function vacantion (input){
    let boudget = Number (input[0]);
    let season = input[1];

    let location = "";
    let type = "";
    let price = 0;

    if (boudget <= 1000){
        type = "Camp"
    }
    else if (boudget > 1000 && boudget <= 3000){
        type = "Hut"
    }
    else if (boudget > 3000){
        type = "Hotel"
    }

    switch (season){
        case "Summer":
            if (type == "Camp"){
                location = "Alaska"
                price = boudget * 0.65
            }
            else if (type == "Hut"){
                location = "Alaska"
                price = boudget * 0.8
            }
            else if (type == "Hotel"){
                location = "Alaska"
                price = boudget * 0.9
            }
            break;

        case "Winter":
            if (type == "Camp"){
                location = "Morocco"
                price = boudget * 0.45
            }
            else if (type == "Hut"){
                location = "Morocco"
                price = boudget * 0.6
            }
            else if (type == "Hotel"){
                location = "Morocco"
                price = boudget * 0.9
            }
            break;

    }
    console.log (`${location} - ${type} - ${(price).toFixed(2)}`);

}

vacantion (["1100", "Summer"])