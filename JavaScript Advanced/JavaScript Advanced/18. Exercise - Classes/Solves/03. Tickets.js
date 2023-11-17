function tickets(array, sortingCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let ticket = [];

    for (const line of array) {
        let [destination, price, status] = line.split("|");
        price = Number(price);
        let currentTicket = new Ticket(destination, price, status);
        ticket.push(currentTicket);
    }

    let sortedTickets = ticket.sort((a, b) => {
        if (sortingCriteria === 'destination') {
            return a.destination.localeCompare(b.destination);
        }
        else if (sortingCriteria === 'status') {
            return a.status.localeCompare(b.status);
        }
        else if (sortingCriteria === 'price') {
            return a.price.localeCompare(b.price);
        }
    });
    return sortedTickets
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
)