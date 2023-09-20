function gymnastic(input) {

    let country = input[0];
    let ured = input[1];

    let grade = 0;
    let maxGrade = 20;
    percentPoints = 0;

    switch (country) {

        case "Russia":

            switch (ured) {
                case "ribbon":
                    grade = 9.100 + 9.400;
                    percentPoints = maxGrade - grade;
                    percentPoints = (percentPoints / maxGrade) * 100;
                    break;

                case "hoop":
                    grade = 9.300 + 9.800;
                    percentPoints = maxGrade - grade;
                    percentPoints = (percentPoints / maxGrade) * 100;
                    break;

                case "rope":
                    grade = 9.600 + 9.000;
                    percentPoints = maxGrade - grade;
                    percentPoints = (percentPoints / maxGrade) * 100;
                    break;
            }
            break;
            
        case "Bulgaria":
            switch (ured) {
                case "ribbon":
                    grade = 9.600 + 9.400;
                    percentPoints = maxGrade - grade;
                    percentPoints = (percentPoints / maxGrade) * 100;
                    break;

                case "hoop":
                    grade = 9.550 + 9.750;
                    percentPoints = maxGrade - grade;
                    percentPoints = (percentPoints / maxGrade) * 100;
                    break;

                case "rope":
                    grade = 9.500 + 9.400;
                    percentPoints = maxGrade - grade;
                    percentPoints = (percentPoints / maxGrade) * 100;
                    break;
            }
            break;

        case "Italy":
            switch (ured) {
                case "ribbon":
                    grade = 9.200 + 9.500;
                    percentPoints = maxGrade - grade;
                    percentPoints = (percentPoints / maxGrade) * 100;
                    break;

                case "hoop":
                    grade = 9.450 + 9.350;
                    percentPoints = maxGrade - grade;
                    percentPoints = (percentPoints / maxGrade) * 100;
                    break;

                case "rope":
                    grade = 9.700 + 9.150;
                    percentPoints = maxGrade - grade;
                    percentPoints = (percentPoints / maxGrade) * 100;
                    break;
            }
            break;
    }

    console.log(`The team of ${country} get ${grade.toFixed(3)} on ${ured}."`);
    console.log(`${percentPoints.toFixed(2)}%`)
}

gymnastic(["Bulgaria","ribbon"])
