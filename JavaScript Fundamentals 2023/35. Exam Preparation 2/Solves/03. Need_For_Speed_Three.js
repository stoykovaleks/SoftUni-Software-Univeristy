function needForSpeedThree(input) {
    let cars = {};

    function addCar(carData) {
        const [car, mileage, fuel] = carData.split('|');
        cars[car] = { mileage: Number(mileage), fuel: Number(fuel) };
    }

    function driveCar(car, distance, requiredFuel) {
        if (cars[car].fuel >= requiredFuel) {
            cars[car].mileage += Number(distance);
            cars[car].fuel -= requiredFuel;
            console.log(`${car} driven for ${distance} kilometers. ${requiredFuel} liters of fuel consumed.`);

            if (cars[car].mileage >= 100000) {
                delete cars[car];
                console.log(`Time to sell the ${car}!`);
            }
        } else {
            console.log('Not enough fuel to make that ride');
        }
    }

    function refuelCar(car, fuel) {
        const availableSpace = 75 - cars[car].fuel;
        const refuelAmount = Math.min(Number(fuel), availableSpace);
        cars[car].fuel += refuelAmount;
        console.log(`${car} refueled with ${refuelAmount} liters`);
    }

    function revertCar(car, kilometers) {
        cars[car].mileage -= Number(kilometers);
        if (cars[car].mileage < 10000) {
            cars[car].mileage = 10000;
        } else {
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }

    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        addCar(input[i]);
    }

    let commandIndex = n;

    while (input[commandIndex] !== 'Stop') {
        const [command, car, param1, param2] = input[commandIndex].split(' : ');

        switch (command) {
            case 'Drive':
                driveCar(car, param1, param2);
                break;

            case 'Refuel':
                refuelCar(car, param1);
                break;

            case 'Revert':
                revertCar(car, param1);
                break;

            default:
                console.log('Invalid command');
        }

        commandIndex++;
    }

    Object.entries(cars).forEach(([car, data]) => {
        console.log(`${car} -> Mileage: ${data.mileage} kms, Fuel in the tank: ${data.fuel} lt.`);
    });
}

needForSpeedThree(['3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11', 'Drive : Volkswagen Passat CC : 69 : 8', 'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
])