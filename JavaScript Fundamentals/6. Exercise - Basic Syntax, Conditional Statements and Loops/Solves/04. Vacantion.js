function vacantion(groupOfPeople, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (typeOfGroup === "Students") {
                totalPrice = groupOfPeople * 8.45;
                if (groupOfPeople >= 30) {
                    totalPrice *= 0.85;
                }
            }
            else if (typeOfGroup === "Business") {
                if (groupOfPeople >= 100) {
                    groupOfPeople -= 10;
                }
                totalPrice = groupOfPeople * 10.90;
            }
            else if (typeOfGroup === "Regular") {
                totalPrice = groupOfPeople * 15;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    totalPrice *= 0.95;
                }
            }
            break;

        case "Saturday":
            if (typeOfGroup === "Students") {
                totalPrice = groupOfPeople * 9.80;
                if (groupOfPeople >= 30) {
                    totalPrice *= 0.85;
                }
            }
            else if (typeOfGroup === "Business") {
                if (groupOfPeople >= 100) {
                    groupOfPeople -= 10;
                }
                totalPrice = groupOfPeople * 15.60;

            }
            else if (typeOfGroup === "Regular") {
                totalPrice = groupOfPeople * 20;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    totalPrice *= 0.95;
                }
            }
            break;

        case "Sunday":
            if (typeOfGroup === "Students") {
                totalPrice = groupOfPeople * 10.46;
                if (groupOfPeople >= 30) {
                    totalPrice *= 0.85;
                }
            }
            else if (typeOfGroup === "Business") {
                if (groupOfPeople >= 100) {
                    groupOfPeople -= 10;
                }
                totalPrice = groupOfPeople * 16;
            }
            else if (typeOfGroup === "Regular") {
                totalPrice = groupOfPeople * 22.50;
                if (groupOfPeople >= 10 && groupOfPeople <= 20) {
                    totalPrice *= 0.95;
                }
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}