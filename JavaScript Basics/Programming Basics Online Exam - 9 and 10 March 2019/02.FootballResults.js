function footbalREsults(input) {
    
    let resultFromFirst = input[0];
    let resultFromSecond = input[1];
    let resultFromThird = input[2];

    let wins = 0;
    let loss = 0;
    let draw = 0;

    if (resultFromFirst[0] > resultFromFirst[2]){
        wins++;
    }
    else if (resultFromFirst[0] < resultFromFirst[2]){
        loss++;
    }
    else if (resultFromFirst[0] = resultFromFirst[2]){
        draw++;
    }

    if (resultFromSecond[0] > resultFromSecond[2]){
        wins++;
    }
    else if (resultFromSecond[0] < resultFromSecond[2]){
        loss++;
    }
    else if (resultFromSecond[0] = resultFromSecond[2]){
        draw++;
    }

    if (resultFromThird[0] > resultFromThird[2]){
        wins++;
    }
    else if (resultFromThird[0] < resultFromThird[2]){
        loss++;
    }
    else if (resultFromThird[0] = resultFromThird[2]){
        draw++;
    }

    console.log (`Team won ${wins} games.`)
    console.log (`Team lost ${loss} games.`)
    console.log (`Drawn games: ${draw}`)
}

footbalREsults(["3:1", "0:2","0:0"])