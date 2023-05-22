function cake(input) {
    let index = 0;

    let lenght = Number(input[index]);
    index++;

    let width = Number(input[index]);
    index++;

    let pieces = width * lenght;

    let command = input[index];
    index++;

    while (command !== "STOP") {
        let getPieces = Number(command);

        pieces -= getPieces;

        if (pieces <= 0){
            console.log(`No more cake left! You need ${Math.abs(pieces)} pieces more.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command == "STOP") {
        console.log(`${pieces} pieces are left.`);
    }
}

cake(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"])
