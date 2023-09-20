function gymnastics(input) {
    let country = input[0];
    let type = input[1];

    let points = 0;
    let percent = 0;

    switch (country) {
        case "Russia":

            switch (type) {
                case "ribbon":
                    points = (9.100 + 9.400);
                    percent = ((20 - points) / 20) * 100;
                    break;

                case "hoop":
                    points = (9.300 + 9.800);
                    percent = ((20 - points) / 20) * 100;
                    break;

                case "rope":
                    points = (9.600 + 9.000);
                    percent = ((20 - points) / 20) * 100;
                    break;
            }
            break;

        case "Bulgaria":

            switch (type) {
                case "ribbon":
                    points = (9.600 + 9.400);
                    percent = ((20 - points) / 20) * 100;
                    break;

                case "hoop":
                    points = (9.550 + 9.750);
                    percent = ((20 - points) / 20) * 100;
                    break;

                case "rope":
                    points = (9.500 + 9.400);
                    percent = ((20 - points) / 20) * 100;
                    break;
            }
            break;

        case "Italy":

            switch (type) {
                case "ribbon":
                    points = (9.100 + 9.400);
                    percent = ((20 - points) / 20) * 100;
                    break;

                case "hoop":
                    points = (9.300 + 9.800);
                    percent = ((20 - points) / 20) * 100;
                    break;

                case "rope":
                    points = (9.600 + 9.000);
                    percent = ((20 - points) / 20) * 100;
                    break;
            }
            break;
    }
    console.log(`The team of ${country} get ${points.toFixed(3)} on ${type}.`);
    console.log(`${percent.toFixed(2)}%`);
}

gymnastics(["Russia", "rope"])


