function calculatePrice(input){
    let month = input[0]
    let nights = Number (input[1])

    let studioPrice = 0;
    let apartmentPrice = 0;

    if (month == "May" || month == "October") {
        studioPrice = 50;
        apartmentPrice = 65;
    } else if (month == "June" || month ==="September") {
        studioPrice = 75.2;
        apartmentPrice = 68.7;
    } else if (month == "July" || month == "August") {
        studioPrice = 76;
        apartmentPrice = 77;
    }

    if (month == "May" || month == "October") {
        if (nights > 7) {
            studioPrice *= 0.95;
        }
        if (nights > 14) {
            studioPrice *= 0.7;
        }
    } else if (month == "June" || month == "September") {
        if (nights > 14) {
            studioPrice *= 0.8;
        }
    }
    if (nights > 14) {
        apartmentPrice *= 0.9;
    }

    let studioTotal = studioPrice * nights;
    let apartmentTotal = apartmentPrice * nights;

 
    console.log(`Apartment: ${(apartmentTotal).toFixed(2)} lv.`);
    console.log(`Studio: ${(studioTotal).toFixed(2)} lv.`);
}

calculatePrice (["May","15"])
