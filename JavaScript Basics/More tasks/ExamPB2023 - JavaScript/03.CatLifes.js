function catLife(input) {
    let catBreed = input[0];
    let catGender = input[1];

    let humanYears = 0;
    let humanMonths = 0;
    let catMonths = 0;

    switch (catBreed) {
        case "British Shorthair":
            if (catGender === "m") {
                humanYears = 13;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            else if (catGender === "f") {
                humanYears = 14;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            break;
        case "Siamese":
            if (catGender === "m") {
                humanYears = 15;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            else if (catGender === "f") {
                humanYears = 16;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            break;
        case "Persian":
            if (catGender === "m") {
                humanYears = 14;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            else if (catGender === "f") {
                humanYears = 15;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            break;
        case "Ragdoll":
            if (catGender === "m") {
                humanYears = 16;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            else if (catGender === "f") {
                humanYears = 17;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            break;
        case "American Shorthair":
            if (catGender === "m") {
                humanYears = 12;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            else if (catGender === "f") {
                humanYears = 13;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            break;
        case "Siberian":
            if (catGender === "m") {
                humanYears = 11;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            else if (catGender === "f") {
                humanYears = 12;
                humanMonths = humanYears * 12;
                console.log(`${catMonths = humanMonths / 6} cat months`);
            }
            break;

        default:
            console.log(`${catBreed} is invalid cat!`);
            break;
    }
}

catLife(["Tom", "m"])