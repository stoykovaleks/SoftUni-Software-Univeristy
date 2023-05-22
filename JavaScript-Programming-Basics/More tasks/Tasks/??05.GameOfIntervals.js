function gameOfIntervals(input) {

    let movesInGame = Number(input[0]);

    let points = 0;
    let result = 0;

    for (let i = 1; i <= movesInGame; i++) {

        let nums = Number(input[i]);

        if (nums >= 0 && nums < 10) {
            points = nums * 0.2;
            result += points;
        }
        else if (nums >= 10 && nums < 20) {
            points = nums * 0.3;
            result += points;
        }
        else if (nums >= 20 && nums < 30) {
            points = nums * 0.4;
            result += points;
        }
        else if (nums >= 30 && nums < 40) {
            result += 50;
        }
        else if (nums >= 40 && nums <= 50) {
            result += 100;
        }

        if (nums > 50 || nums < 0) {
            result+=50;
        }
        
    }
    console.log(result)
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"])