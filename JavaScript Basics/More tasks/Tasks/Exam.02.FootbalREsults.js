function footballResult(input) {
    let resultFirst = input[0];
    let resultSecond = input[1];
    let resultThird = input[2];

    let win = 0;
    let lost = 0;
    let drawn = 0;

    if (resultFirst[0] > resultFirst[2]){
        win++;
    }
    else if (resultFirst[0]<resultFirst[2]){
        lost++;
    }
    else if (resultFirst[0] == resultFirst[2]){
        drawn++;
    }

    if (resultSecond[0] > resultSecond[2]){
        win++;
    }
    else if (resultSecond[0]<resultSecond[2]){
        lost++;
    }
    else if (resultSecond[0] == resultSecond[2]){
        drawn++;
    }

    if (resultThird[0] > resultThird[2]){
        win++;
    }
    else if (resultThird[0]<resultThird[2]){
        lost++;
    }
    else if (resultThird[0] == resultThird[2]){
        drawn++;
    }

    console.log(`Team won ${win} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${drawn} games.`);

}

footballResult(["0:2", "0:1", "3:3"])