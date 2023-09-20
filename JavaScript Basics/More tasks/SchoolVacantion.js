function schollVacantion (input){
    let season = input[0];
    let groupType = input[1];
    let studentsCount = Number (input[2]);
    let nightsCount = Number (input[3]);

    let sportsType = "";
    let totalSum = 0;

    switch (season) {
        case "Winter":
            if (groupType == "girls"){
                sportsType = "Gymnastics"
            }
            else if (groupType == "boys"){
                sportsType = "Judo"
            }
            else if (groupType == "mixed"){
                sportsType = "Ski"
            }
            break;

        case "Spring":
            if (groupType == "girls"){
                sportsType = "Athletics"
            }
            else if (groupType == "boys"){
                sportsType = "Tennis"
            }
            else if (groupType == "mixed"){
                sportsType = "Cycling"
            }
            break;

        case "Summer":
            if (groupType == "girls"){
                sportsType = "Volleyball"
            }
            else if (groupType == "boys"){
                sportsType = "Football"
            }
            else if (groupType == "mixed"){
                sportsType = "Swimming"
            }
            break;
    }

    switch (season) {
        case "Winter":
            switch (groupType){
                case "boys":
                case "girls":
                    totalSum = studentsCount * 9.60 * nightsCount
                    break;
                case "mixed":
                    totalSum = studentsCount * 10 * nightsCount
                    break;
            }
            break;

        case "Spring":
            switch (groupType){
                case "boys":
                case "girls":
                    totalSum = studentsCount * 7.20 * nightsCount
                    break;
                case "mixed":
                    totalSum = studentsCount * 9.50 * nightsCount
                    break;
           }
           break;

        case "Summer":
            switch (groupType){
                case "boys":
                case "girls":
                    totalSum = studentsCount * 15 * nightsCount
                    break;
                case "mixed":
                    totalSum = studentsCount * 20 * nightsCount
                    break;
           }
           break

    }

    if (studentsCount >= 10 && studentsCount < 20){
        totalSum *= 0.95
    }
    else if (studentsCount >= 20 && studentsCount < 50){
        totalSum *= 0.85
    }
    else if (studentsCount >= 50){
        totalSum *= 0.50
    }

    console.log (`${sportsType} ${(totalSum).toFixed(2)} lv.`);
}

schollVacantion (["Winter", "mixed", "9", "15"]);