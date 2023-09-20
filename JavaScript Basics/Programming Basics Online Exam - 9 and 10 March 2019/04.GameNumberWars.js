function numberWars(input) {

    let firstPlayerName = input[0];
    let secondPlayerName = input[1];

    let firstPoints = 0;
    let secondPoints = 0;
    let winner = "";
    let winnerPoints = 0;

    while (input != "End of game") {
        let firstCard = Number(input[index]);
        let secondCard = Number(input[secondPlayerName]);

        if (firstCard > secondCard) {
            firstPoints = firstCard - secondCard;
            winner = firstPlayerName;
            winnerPoints = firstPoints;
        }
        else if (firstCard < secondCard) {
            secondPoints = secondCard - firstCard;
            winner = secondPlayerName;
            winnerPoints = secondPoints;
        }
        else if (firstCard = secondCard) {
            console.log(`Number wars!`);
            console.log(`${winner} is winner with ${winnerPoints}`)
            continue;
        }
    }
    console.log(`${firstPlayerName} has ${firstPoints} points`);
    console.log(`${secondPlayerName} has ${secondPoints} points`);

}}

numberWars(["Desi", "Niki", "7", "5", "3", "4", "3", "3", "5", "3"])
