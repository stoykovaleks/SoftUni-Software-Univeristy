function examPrep(input) {
    let index = 0;

    let maxBadGrades = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let grade = Number(input[index]);
    index++;

    let badGrade = 0;
    let countGrade = 0;
    let sumOfGrades = 0;
    let lastProblem = "";

    while (command !== "Enough") {
        lastProblem = command;

        if (grade <= 4) {
            badGrade++;
        }

        if (badGrade >= maxBadGrades) {
            console.log(`You need a break, ${badGrade} poor grades.`);
            return;
        }

        countGrade++;
        sumOfGrades += grade;

        command = input[index];
        index++;

        grade = Number(input[index]);
        index++;
    }

    console.log(`Average score: ${(sumOfGrades / countGrade).toFixed(2)}`);
    console.log(`Number of problems: ${countGrade}`);
    console.log(`Last problem: ${lastProblem}`)
}

examPrep(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"])

