function goldMine(input) {
    let index = 0;
    let locationsCount = Number(input[index]);
    index++;

    for (let locations = 1; locations <= locationsCount; locations++) {
        let expectedAverageProduce = Number(input[index]);
        index++;
        let countDaysOfDigging = Number(input[index]);
        index++;

        let avgMining = 0;
        let mining = 0;

        for (let days = 1; days <= countDaysOfDigging; days++) {
            let currentMinedGold = Number(input[index]);
            index++;

            mining += currentMinedGold;
        }
        avgMining = mining / countDaysOfDigging;
        
        if (avgMining >= expectedAverageProduce) {
            console.log(`Good job! Average gold per day: ${avgMining.toFixed(2)}.`);
        }
        else if (avgMining < expectedAverageProduce) {
            console.log(`You need ${(expectedAverageProduce - avgMining).toFixed(2)} gold.`);
        }
    }
}

goldMine(["2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"])