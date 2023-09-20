function truckDriver (input){
    let season = input[0];
    let kilometersPerMonth = Number (input[1])

    let driverSallary = 0;

    switch (season) {
        case "Spring":
        case "Autumn":
            if (kilometersPerMonth <= 5000){
                driverSallary = kilometersPerMonth * 0.75
            }
            else if (kilometersPerMonth <= 10000){
                driverSallary = kilometersPerMonth * 0.95
            }
            else if (kilometersPerMonth <= 20000){
                driverSallary = kilometersPerMonth * 1.45
            }
            break;

        case "Summer":
            if (kilometersPerMonth <= 5000){

                driverSallary = kilometersPerMonth * 0.90
            }
            else if (kilometersPerMonth <= 10000){

                driverSallary = kilometersPerMonth * 1.10
            }
            else if (kilometersPerMonth <= 20000){

                driverSallary = kilometersPerMonth * 1.45
            }
            break;

        case "Winter":
            if (kilometersPerMonth <= 5000){

                driverSallary = kilometersPerMonth * 1.05
            }
            else if (kilometersPerMonth <= 10000){
                driverSallary = kilometersPerMonth * 1.25
            }
            else if (kilometersPerMonth <= 20000){
                driverSallary = kilometersPerMonth * 1.45
            }
            break;
    }
    driverSallary *= 0.9;
    console.log (`${(driverSallary * 4).toFixed(2)}`);
}

truckDriver (["Summer", "3455"]);