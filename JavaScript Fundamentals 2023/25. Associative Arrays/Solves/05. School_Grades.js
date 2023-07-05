function schoolGrades(input) {
    let studentsData = new Map();

    for (let line of input) {
        let [name, ...grades] = line.split(' ');
        let existingGrades = studentsData.get(name) || [];
        let gradeAsNum = existingGrades.concat(grades.map(Number));
        studentsData.set(name, gradeAsNum);
    }

    let sortedStudents = Array.from(studentsData).sort(([nameA], [nameB]) => nameA.localeCompare(nameB));

    for (const [name, grades] of sortedStudents) {
        let averageGrade = (grades.reduce((sum, grade) => sum + grade, 0) / grades.length).toFixed(2);
        console.log(`${name}: ${averageGrade}`);
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])