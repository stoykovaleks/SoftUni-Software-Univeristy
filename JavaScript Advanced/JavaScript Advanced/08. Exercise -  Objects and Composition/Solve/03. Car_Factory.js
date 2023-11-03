function carFactory(model, power, color, carriage, wheelsize) {
    const engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    }
    let engine = {};

    if (power <= 90) {
        engine = engines.smallEngine;
    }
    else if (power <= 120) {
        engine = engines.normalEngine;
    }
    else {
        engine = engines.monsterEngine;
    }

    let sizeOfWheels = wheelsize;

    if (wheelsize % 2 === 0) {
        sizeOfWheels--;
    }

    let car = {
        model,
        engine,
        carriage: {
            type: carriage,
            color
        },
        wheels: [sizeOfWheels, sizeOfWheels, sizeOfWheels, sizeOfWheels]
    };

    
    return car;
}