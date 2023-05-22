function christmasGifts(input) {
    let index = 0;

    let command = input[index];
    index++;

    let adults = 0;
    let kids = 0;
    let toyPrice = 0;
    let sweaters = 0;

    while (command !== "Christmas") {
        let memberAge = Number(command);

        if (memberAge <= 16) {
            kids++;
        }
        else if (memberAge > 16) {
            adults++;
        }
        command = input[index];
        index++;
    }
    console.log(`Number of adults: ${adults}`);
    console.log(`Number of kids: ${kids}`);
    console.log(`Money for toys: ${kids * 5}`);
    console.log(`Money for sweaters: ${adults * 15}`);

}

christmasGifts(["16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"])