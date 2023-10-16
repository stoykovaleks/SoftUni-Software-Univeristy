function roadRadarAsObj(speed, area) {
    const speedLimits = {
        "motorway": 130,
        "interstate": 90,
        "city": 50,
        "residential": 20
    };
    const limit = speedLimits[area];
    const difference = speed - limit;

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    }
    else {
        let status;

        if (difference <= 20) {
            status = 'speeding';
        } else if (difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`);
    }
}

roadRadarAsObj(21, 'residential')