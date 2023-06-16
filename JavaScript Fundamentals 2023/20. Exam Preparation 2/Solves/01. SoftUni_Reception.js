function softuniReception(input) {
    let answers = input.slice(0, 3).map(Number);
    let studentsCount = Number(input.pop());
    let totalTime = 0;

    for (let i = 0; i < answers.length; i++) {
        totalTime += answers[i];
    }
    let hours = 0;
    let answeredStudents = 0;

    while (answeredStudents < studentsCount) {
        hours++;
        if (hours % 4 !== 0) {
            answeredStudents += totalTime;
        }
    }
    console.log(`Time needed: ${hours}h.`);
}

softuniReception(['5', '6', '4', '20'])
console.log("----------");
softuniReception(['1', '2', '3', '45'])