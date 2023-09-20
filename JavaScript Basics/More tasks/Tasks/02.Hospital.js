function hospital(input) {

    let period = Number(input[0]);

    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for (let day = 1; day <= period; day++) {

        let patients = Number(input[day]);

        if (day % 3 == 0) {
            if (untreatedPatients > treatedPatients) {
                doctors++;
            }
        }
        if (patients <= doctors) {
            treatedPatients += patients;
        }
        else {
            treatedPatients += doctors;
            untreatedPatients += patients - doctors
        }

    }
    console.log(`Treated patients: ${treatedPatients}`);
    console.log(`Untreated patients: ${untreatedPatients}`);

}

hospital(["4", "7", "27", "9", "1"]);