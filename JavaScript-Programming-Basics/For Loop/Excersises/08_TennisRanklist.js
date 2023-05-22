function tennisRanklis (input){
    let countTurnirs = Number (input.shift());
    let startingPoints = Number (input.shift());

    let wPoints = 2000;
    let fPoints = 1200;
    let sfPoints = 720;
    let totalPoints = 0;
    let wons = 0;
       
    for (let i = 0; i < countTurnirs; i++) {
        
        let currentEtap = String(input[i]);

        if (currentEtap == "W"){
            totalPoints += wPoints;
            wons++;
        }
        else if (currentEtap == "F"){
            totalPoints += fPoints;
        }
        else if (currentEtap == "SF"){
            totalPoints += sfPoints;
        }
    }
    console.log(`Final points: ${totalPoints + startingPoints}`);
    console.log (`Average points: ${Math.floor(totalPoints / countTurnirs)}`);
    console.log (`${((wons / countTurnirs) * 100).toFixed(2)}%`);
}

tennisRanklis (["7","1200","SF","F","W","F","W","SF","W"])
