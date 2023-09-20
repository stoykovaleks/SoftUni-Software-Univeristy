function grades(input) {

    let studentsCount = Number(input[0]);

    let excellent = 0; // grade >= 5.00
    let good = 0;      // grade >= 4.00 && grade < 5.00
    let avg = 0;       // grade >= 3.00 && grade < 4.00
    let fail = 0;      // grade < 3.00
    let average = 0;

    for (let i = 1; i <= studentsCount; i++) {

        let grade = Number(input[i]);
        average += grade / studentsCount;

        if (grade >= 5) {
            excellent++;
        }
        else if (grade >= 4 && grade < 5) {
            good++;
        }
        else if (grade >= 3 && grade < 4) {
            avg++;
        }
        else {
            fail++;
        }
    }
    console.log(`Top students: ${((excellent / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((good / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((avg / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((fail / studentsCount) * 100).toFixed(2)}%`);
    console.log(`Average: ${(average).toFixed(2)}`)

}

grades(["6", "2", "3", "4", "5", "6", "2.2"])