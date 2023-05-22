function computerFilm(input) {
    let modelComputersCount = Number(input[0]);

    let possibleSales = 0;
    let sales = 0;
    let rating = 0;
    let countRating = 0;

    for (let i = 1; i <= modelComputersCount; i++) {
        let number = Number(input[i]);

        rating = number % 10;
        countRating += rating;

        possibleSales = Math.floor(number / 10);

        if (rating === 2) {
            sales += possibleSales * 0;
        }
        else if (rating === 3) {
            sales += possibleSales * 0.5;
        }
        else if (rating === 4) {
            sales += possibleSales * 0.7;
        }
        else if (rating === 5) {
            sales += possibleSales * 0.85;
        }
        else if (rating === 6) {
            sales += possibleSales * 1;
        }
    }

    console.log(sales.toFixed(2));
    console.log((countRating / modelComputersCount).toFixed(2));
}
computerFilm(["3", "103", "103", "103"])