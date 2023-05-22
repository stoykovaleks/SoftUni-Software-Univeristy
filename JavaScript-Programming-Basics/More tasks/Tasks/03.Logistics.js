function logistics(input) {

    let logCount = Number(input[0]);

    let bus = 0;
    let truck = 0;
    let train = 0;
    let avgPrice = 0
    let totalLogs = 0;

    for (let log = 1; log <= logCount; log++) {

        let logTons = Number(input[log]);

        totalLogs += logTons;

        if (logTons <= 3) {
            bus += logTons;
        }
        else if (logTons < 12) {
            truck += logTons;
        }
        else if (logTons >= 12) {
            train += logTons;
        }
        avgPrice = (bus * 200 + truck * 175 + train * 120) / totalLogs;
    }
    console.log(avgPrice.toFixed(2));
    console.log((bus / totalLogs * 100).toFixed(2) + "%")
    console.log((truck / totalLogs * 100).toFixed(2) + "%")
    console.log((train / totalLogs * 100).toFixed(2) + "%")
}

logistics(["4", "1", "5", "16", "3"])