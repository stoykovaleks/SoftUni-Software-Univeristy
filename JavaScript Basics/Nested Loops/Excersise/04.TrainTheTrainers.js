function trainTheTrainers(input) {
    let index = 0;

    let judgeCount = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let totalAvgGrade = 0;
    let totalGrades = 0;

    while (command !== "Finish") {
        let presentation = (command);
        let avgGrade = 0;

        for (let judges = 1; judges <= judgeCount; judges++) {
            let grades = Number(input[index]);
            totalGrades++;
            avgGrade += grades;
            index++;
        }
        console.log(`${presentation} - ${(avgGrade / judgeCount).toFixed(2)}.`);

        totalAvgGrade += avgGrade;

            command = input[index];
        index++;
    }
    console.log(`Student's final assessment is ${(totalAvgGrade/totalGrades).toFixed(2)}.`);
}

trainTheTrainers(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"])

