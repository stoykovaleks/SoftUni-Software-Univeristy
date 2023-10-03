function carFactory(input) {
    let res = {
        model: input.model,
    }
    let power = input.power
    if (power <= 90) {
        res.engine = {
            power: 90, volume: 1800
        }
    }
    else if (power <= 120) {
        res.engine = {
            power: 120, volume: 2400
        }
    }
    else {
        res.engine = {
            power: 200, volume: 3500
        }
    }

    let carriage = input.carriage;
    if (carriage === 'Hatchback') {
        res.carriage = { type: 'hatchback', color: input.color };
    }
    else {
        res.carriage = { type: 'coupe', color: input.color };
    }
    let wheelsize = input.wheelsize
    
    if (wheelsize % 2 === 0) {
        wheelsize -= 1;
    }
    res.wheels = wheelsize, wheelsize, wheelsize, wheelsize

}
carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
)