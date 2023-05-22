function vacantion(input) {
    let groupPeople = Number (input[0]);
    let typeGroup = input[1];
    let dayWeek = input[2];
    
    let totalPrice = 0;
    let pricePerStudent = 0;

    switch (typeGroup) {
        case "Students":


            if (dayWeek == "Friday") {

                pricePerStudent = 8.45;

                if (groupPeople >= 30) {
                    totalPrice = (pricePerStudent * groupPeople) * 0.85;
                }
                else {
                    totalPrice = pricePerStudent * groupPeople;
                }
            }
            else if (dayWeek == "Saturday") {

                pricePerStudent = 9.80;

                if (groupPeople >= 30) {
                    totalPrice = (pricePerStudent * groupPeople) * 0.85;
                }
                else {
                    totalPrice = pricePerStudent * groupPeople;
                }
            }
            else if (dayWeek == "Sunday") {

                pricePerStudent = 10.46;

                if (groupPeople >= 30) {
                    totalPrice = (pricePerStudent * groupPeople) * 0.85;
                }
                else {
                    totalPrice = pricePerStudent * groupPeople;
                }
            }
            break;

        case "Bussines":

            if (dayWeek == "Friday") {

                pricePerStudent = 10.90;

                if (groupPeople >= 100) {
                    totalPrice = pricePerStudent * (groupPeople - 10);
                }
                else {
                    totalPrice = pricePerStudent * groupPeople;
                }
            }
            else if (dayWeek == "Saturday") {

                pricePerStudent = 15.60;

                if (groupPeople >= 100) {
                    totalPrice = pricePerStudent * (groupPeople - 10);
                }
                else {
                    totalPrice = pricePerStudent * groupPeople;
                }
            }
            else if (dayWeek == "Sunday") {

                pricePerStudent = 16;

                if (groupPeople >= 100) {
                    totalPrice = pricePerStudent * (groupPeople - 10);
                }
                else {
                    totalPrice = pricePerStudent * groupPeople;
                }
            }
            break;

        case "Regular":

            if (dayWeek == "Friday") {

                pricePerStudent = 15;

                if (groupPeople >= 10 && groupPeople <= 20) {
                    totalPrice = (pricePerStudent * groupPeople) * 0.95;
                }
                else {
                    totalPrice = pricePerStudent * groupPeople;
                }
            }
            else if (dayWeek == "Saturday") {

                pricePerStudent = 20;

                if (groupPeople >= 10 && groupPeople <= 20) {
                    totalPrice = (pricePerStudent * groupPeople) * 0.95;
                }
                else {
                    totalPrice = pricePerStudent * groupPeople;
                }
            }
            else if (dayWeek == "Sunday") {

                pricePerStudent = 16;

                if (groupPeople >= 10 && groupPeople <= 20) {
                    totalPrice = (pricePerStudent * groupPeople) * 0.95;
                }
                else {
                    totalPrice = pricePerStudent * groupPeople;
                }
            }
            break;
    }
    console.log (`Total price: ${totalPrice.toFixed(2)}`);
}

vacantion(30, "Students", "Sunday");