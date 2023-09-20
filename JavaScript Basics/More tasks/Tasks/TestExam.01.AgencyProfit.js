function agencyProfit(input) {
    let flyCompanyName = input[0];
    let countAdultTickets = Number(input[1]);
    let countKidTickets = Number(input[2]);
    let priceAdultTicket = Number(input[3]);
    let serviceTax = Number(input[4]);

    let priceKidTicket = priceAdultTicket * 0.3 + serviceTax;
    priceAdultTicket += serviceTax;


    let totalSum = (priceAdultTicket * countAdultTickets) + (priceKidTicket * countKidTickets);


    console.log(`The profit of your agency from ${flyCompanyName} tickets is ${(totalSum * 0.2).toFixed(2)} lv.`);
}

agencyProfit(["WizzAir", "15", "5", "120", "40"])