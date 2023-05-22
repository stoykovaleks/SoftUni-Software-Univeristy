function cinemaTickets(input) {
    let index = 0;

    let command = input[index];
    index++;

    let kidTicket = 0;
    let studentTicket = 0;
    let standartTicket = 0;
    let totalSellTickets = 0;

    while (command !== "Finish") {
        let movieName = (command);

        let freeSeats = Number(input[index]);
        index++;

        let commandLast = input[index];
        index++;

        let sellTickets = 0;

        while (commandLast !== "End" && sellTickets < freeSeats) {

            let ticketType = commandLast;

            if (ticketType === "student") {
                studentTicket++;
            }
            else if (ticketType === "standard") {
                standartTicket++;
            }
            else if (ticketType === "kid") {
                kidTicket++;
            }
            sellTickets++;
            totalSellTickets++;

            commandLast = input[index];
            index++;
        }

        console.log(`${movieName} - ${((sellTickets / freeSeats) * 100).toFixed(2)}% full.`);

        if (sellTickets >= freeSeats) {
            command = commandLast;
        }
        else {
            command = input[index];
            index++;
        }
    }
    console.log(`Total tickets: ${totalSellTickets}`);
    console.log(`${(studentTicket * 100 / totalSellTickets).toFixed(2)}% student tickets.`);
    console.log(`${(standartTicket * 100 / totalSellTickets).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTicket * 100 / totalSellTickets).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])

