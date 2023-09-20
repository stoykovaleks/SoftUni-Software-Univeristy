function rentACar (input){
    let boudget = Number (input[0]);
    let season = input[1];

    let vechileType = "";
    let vechileClass = "";
    let price = 0;

    if (boudget <= 100){
        vechileClass = "Economy class";
    }
    else if (boudget <= 500){
        vechileClass = "Compact class";
    }
    else if (boudget > 500){
        vechileClass = "Luxury class";
    }

    switch (season){
        case "Summer":
            if (vechileClass == "Economy class"){
                vechileType = "Cabrio"
                price = boudget * 0.35
            }
            else if (vechileClass == "Compact class"){
                vechileType = "Cabrio"
                price = boudget * 0.45
            }
            else if (vechileClass == "Luxury class"){
                vechileType = "Jeep"
                price = boudget * 0.9
            }
            break;

        case "Winter":
            if (vechileClass == "Economy class"){
                vechileType = "Jeep"
                price = boudget * 0.65
            }
            else if (vechileClass == "Compact class"){
                vechileType = "Jeep"
                price = boudget * 0.8
            }
            else if (vechileClass == "Luxury class"){
                vechileType = "Jeep"
                price = boudget * 0.9
            }
            break;
    }
    console.log (vechileClass);
    console.log (`${vechileType} - ${(price).toFixed(2)}`);
}

rentACar (["450", "Summer"])