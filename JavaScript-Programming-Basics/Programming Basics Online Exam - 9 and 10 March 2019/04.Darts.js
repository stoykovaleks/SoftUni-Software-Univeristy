function darts(input) {
    let index = 0;
    let playerName = input[index++];
    let succsessShots = 0;
    let unsuccsessShots = 0;
    let startingScores = 301;

    while (startingScores != 0) {
        let command = input[index++];

        if (command == "Retire") {
            console.log(`${playerName} retired after ${unsuccsessShots} unsuccessful shots.`);
            break;
        }

        let sum = Number(input[index]);

        switch (command) {
            case "Single":
                succsessShots++;
                startingScores -= sum;
                if (startingScores < 0) {
                    succsessShots--;
                    unsuccsessShots++;
                    startingScores += sum;
                }
                break;

            case "Double":
                succsessShots++;
                startingScores -= sum * 2;
                if (startingScores < 0) {
                    succsessShots--;
                    unsuccsessShots++;
                    startingScores += sum * 2;
                }
                break;

            case "Triple":
                succsessShots++;
                startingScores -= sum * 3;
                if (startingScores < 0) {
                    succsessShots--;
                    unsuccsessShots++;
                    startingScores += sum * 3;
                }
                break;
        }
        command = input[index++]
    }
    if (startingScores == 0){
        console.log (`${playerName} won the leg with ${succsessShots} shots.`);
    }

}

darts(["Michael van Gerwen", "Triple", "20", "Triple", "19", "Double", "10", "Single", "3", "Single", "1", "Triple", "20", "Triple", "20", "Double", "20"])