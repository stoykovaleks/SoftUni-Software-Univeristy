function courierExpress(input) {
    let weightPerKilo = Number(input[0]);
    let deliveryType = input[1];
    let distanceInKilometers = Number(input[2]);

    let pricePerKilometer = 0;
    let sum = 0;
    let priceMarkup = 0;
    let totalPrice = 0;

    switch (deliveryType) {
        case "standard":
            if (weightPerKilo < 1) {
                pricePerKilometer = 0.03;
            }
            else if (weightPerKilo >= 1 && weightPerKilo < 10) {
                pricePerKilometer = 0.05;
            }
            else if (weightPerKilo >= 10 && weightPerKilo < 40) {
                pricePerKilometer = 0.10;
            }
            else if (weightPerKilo >= 40 && weightPerKilo < 90) {
                pricePerKilometer = 0.15;
            }
            else if (weightPerKilo >= 90 && weightPerKilo < 150) {
                pricePerKilometer = 0.20;
            }
            totalPrice = distanceInKilometers * pricePerKilometer;
            break;

        case "express":     
            if (weightPerKilo < 1) {
                priceMarkup = weightPerKilo * 0.02 * 0.03 * distanceInKilometers;
                sum = distanceInKilometers * 0.03;
            }
            else if (weightPerKilo >= 1 && weightPerKilo < 10) {
                priceMarkup = weightPerKilo * 0.4 * 0.05 * distanceInKilometers;
                sum = distanceInKilometers * 0.05;
            }
            else if (weightPerKilo >= 10 && weightPerKilo < 40) {
                priceMarkup = weightPerKilo * 0.05 * 0.10 * distanceInKilometers;
                sum = distanceInKilometers * 0.10;
            }
            else if (weightPerKilo >= 40 && weightPerKilo < 90) {
                priceMarkup = weightPerKilo * 0.02 * 0.15 * distanceInKilometers;
                sum = distanceInKilometers * 0.15;
            }
            else if (weightPerKilo >= 90 && weightPerKilo < 150) {
                priceMarkup = weightPerKilo * 0.01 * 0.20 * distanceInKilometers;
                sum = distanceInKilometers * 0.20;
            }
            totalPrice = priceMarkup + sum;
            break;
    }
    console.log(`The delivery of your shipment with weight of ${weightPerKilo.toFixed(3)} kg. would cost ${(totalPrice).toFixed(2)} lv.`);
}

courierExpress(["20",
    "standard",
    "349"])