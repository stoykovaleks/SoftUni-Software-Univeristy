function counterStrike(input) {
    let initialEnergy = Number(input.shift())
    let battleCounter = 0;
    let distance = input.shift();

    while (distance !== "End of battle"){
        distance = Number(distance);

        if(distance > initialEnergy){
            console.log(`Not enough energy! Game ends with ${battleCounter} won battles and ${initialEnergy} energy`);
            return;
        }
        initialEnergy -= distance;
        battleCounter++;

        if (battleCounter % 3 === 0){
            initialEnergy += battleCounter;
        }

        distance = input.shift();
    }
    console.log(`Won battles: ${battleCounter}. Energy left: ${initialEnergy}`);
}

counterStrike((["100", "10", "10", "10", "1", "2", "3", "73", "10"]))
console.log("--------------");
counterStrike((["200", "54", "14", "28", "13", "End of battle"]))