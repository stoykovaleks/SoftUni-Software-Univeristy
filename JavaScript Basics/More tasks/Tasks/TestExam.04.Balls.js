function balls(input) {
    let ballsCount = Number(input[0]);
    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalls = 0;
    let otherBalls = 0;
    let countDevidedPoints = 0;

    for (let balls = 1; balls <= ballsCount; balls++) {

        let ballColor = input[balls];

        if (ballColor == "red") {
            totalPoints += 5;
            redBalls++;
        }
        else if (ballColor == "orange") {
            totalPoints += 10;
            orangeBalls++;
        }
        else if (ballColor == "yellow") {
            totalPoints += 15;
            yellowBalls++;
        }
        else if (ballColor == "white") {
            totalPoints += 20;
            whiteBalls++;
        }
        else if (ballColor == "black") {
            totalPoints /= 2;
            countDevidedPoints++;
        }
        else {
            otherBalls++;
        }
    }
    console.log(`Total points: ${Math.round(totalPoints)}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalls}`);
    console.log(`Other colors picked: ${otherBalls}`);
    console.log(`Divides from black balls: ${countDevidedPoints}`);

}
balls(["10",
    "white",
    "white",
    "ee",
    "red",
    "orange",
    "red",
    "black",
    "black",
    "black",
    "black",
])