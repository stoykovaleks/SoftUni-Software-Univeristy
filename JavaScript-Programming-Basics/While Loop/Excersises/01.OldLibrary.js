function oldLibrary(input) {
    let index = 0;

    let searchedBook = input[index];
    index++;

    let command = input[index];
    index++;

    let bookCounter = 0;

    while (command !== "No More Books") {
        if (command == searchedBook) {
            console.log(`You checked ${bookCounter} books and found it.`)
            break;
        }

        bookCounter++;
        command = input[index];
        index++;
    }

    if (command == "No More Books") {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${bookCounter} books`);
    }
}

oldLibrary(["The Spot",
    "Hunger Games",
    "Harry Potter",
    "Torronto",
    "Spotify",
    "No More Books"])

