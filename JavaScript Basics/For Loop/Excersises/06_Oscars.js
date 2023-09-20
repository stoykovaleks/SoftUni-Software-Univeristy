function oscars(input) {

    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let judgesCount = Number(input[2]);

    for (let i = 0; i < judgesCount; i++) {

        let currentJudge = String(input[]);
        let currentPoints = Number(input[i]);

        totalpoints = startingPoints + (currentJudge.length * currentPoints) / 2;

        if (totalpoints >= 1250.5) {

            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalpoints}!`);
            break;
        }
        else {

            console.log(`Sorry, ${actorName} you need ${(1250.5 - totalPoints).toFixed(2)} more!`);
        }
    }
}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"])
