function skiTrip (input){
    let daysStayng = Number (input[0]) -1;
    let roomType = input[1];
    let grade = input[2];

    let sumForNights = 0;

    switch (roomType){
        case "room for one person":
             sumForNights = 18 * daysStayng; 
             break;

        case "apartment":
            sumForNights = 25 * daysStayng;

            if (daysStayng < 10){
                sumForNights = (25 * daysStayng) * 0.7 
            }
            else if (daysStayng <= 15){
                sumForNights = (25 * daysStayng) * 0.65
            }
            else if (daysStayng > 15){
                sumForNights = (25 * daysStayng) * 0.5
            }
            break;

        case "president apartment":

            if (daysStayng < 10){
                 sumForNights = (35 * daysStayng) * 0.9
            }
            else if (daysStayng <= 15){
                 sumForNights = (35 * daysStayng) * 0.85
            }
            else if (daysStayng > 15){
                sumForNights = (35 * daysStayng) * 0.80
            }
            break;
    }

    if (grade == "positive"){
        sumForNights *= 1.25
    }
    else if (grade == "negative"){
        sumForNights *= 0.9
    }

    console.log (`${(sumForNights).toFixed(2)}`)
}

skiTrip (["14","apartment","positive"])
