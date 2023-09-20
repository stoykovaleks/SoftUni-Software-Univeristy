function graduation(input) {
    let index = 0;

    let name = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let classIndex = 1;
    let badGradeCounter = 0;
    let sumGrades = 0;
    let hasBeenExcluded = false;

    while (classIndex <= 12) {
        if (grade < 4) {
            badGradeCounter++;

            if (badGradeCounter == 2) {
                hasBeenExcluded = true;
                break;
            }
            grade = Number(input[index]);
            index++;
            continue;
        }

        classIndex++;
        sumGrades += grade;
        grade = Number(input[index]);
        index++;
    }

    let avgGrade = sumGrades / 12;

    if (hasBeenExcluded) {
        console.log(`${name} has been excluded at ${classIndex} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
    }
}


graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"])
