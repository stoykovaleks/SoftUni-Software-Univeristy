function courierExpress(input) {
    let lightKg = Number(input[0]);
    let typeService = input[1];
    let distanceInKm = Number(input[2])

    let pricePerKilometer = 0;
    let price = 0;
    let uppPerKm = 0;
    let upperPerKg = 0;
    let totalUpper = 0;

    switch (typeService) {
        case "standard":
            if (lightKg < 1) {
                pricePerKilometer = 0.03;
            }
            else if (lightKg >= 1 && lightKg < 10) {
                pricePerKilometer = 0.05;
            }
            else if (lightKg >= 10 && lightKg < 40) {
                pricePerKilometer = 0.10;
            }
            else if (lightKg >= 40 && lightKg < 90) {
                pricePerKilometer = 0.15;
            }
            else if (lightKg >= 90 && lightKg < 150) {
                pricePerKilometer = 0.20
            }
            price = pricePerKilometer * distanceInKm;
            break;

        case "express":
            if (lightKg < 1) {
                pricePerKilometer = 0.03 * distanceInKm;
                upperPerKg = 0.03 * 0.8;
                uppPerKm = lightKg * upperPerKg;
                totalUpper = distanceInKm * uppPerKm;   
            }
            else if (lightKg >= 1 && lightKg < 10) {
                pricePerKilometer = 0.05 * distanceInKm;
                upperPerKg = 0.05 * 0.4;
                uppPerKm = lightKg * upperPerKg;
                totalUpper = distanceInKm * uppPerKm;
            }
            else if (lightKg >= 10 && lightKg < 40) {
                pricePerKilometer = 0.10 * distanceInKm;
                upperPerKg = 0.10 * 0.05;
                uppPerKm = lightKg * upperPerKg;
                totalUpper = distanceInKm * uppPerKm
            }
            else if (lightKg >= 40 && lightKg < 90) {
                pricePerKilometer = 0.15 * distanceInKm; 
                upperPerKg = 0.15 * 0.02;
                uppPerKm = lightKg * upperPerKg;
                totalUpper = distanceInKm * uppPerKm
            }
            else if (lightKg >= 90 && lightKg < 150) {
                pricePerKilometer = 0.20 * distanceInKm;
                upperPerKg = 0.20 * 0.01;
                uppPerKm = lightKg * upperPerKg;
                totalUpper = distanceInKm * uppPerKm;
            }
  
            price = pricePerKilometer + totalUpper;
            break;
    }
    console.log(`The delivery of your shipment with weight of ${lightKg.toFixed(3)} kg. would cost ${price.toFixed(2)} lv.`)
}

courierExpress(["87",
    "express",
    "130"])