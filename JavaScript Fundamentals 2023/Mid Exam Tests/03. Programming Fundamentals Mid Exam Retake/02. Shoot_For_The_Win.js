function shootForTheWin(input) {
    let target = input.shift().split(" ").map(Number);
    let index = 0;
    let command = input.shift();

    while (command !== "End") {
        let count = Number(command);

        if (count >= 0 && count < target.length && target[count] !== -1) {
            let targetValue = target[count];
            target[count] = -1;
            index++;

            for (let i = 0; i < target.length; i++) {
                if (target[i] !== -1) {
                    if (target[i] > targetValue) {
                        target[i] -= targetValue;
                    } else {
                        target[i] += targetValue;
                    }
                }
            }
        }
        command = input.shift();
    }
    console.log(`Shot targets: ${index} -> ${target.join(" ")}`);
}

shootForTheWin((["24 50 36 70", "0", "4", "3", "1", "End"]))
console.log("----------");
shootForTheWin((["30 30 12 60 54 66", "5", "2", "4", "0", "End"]))