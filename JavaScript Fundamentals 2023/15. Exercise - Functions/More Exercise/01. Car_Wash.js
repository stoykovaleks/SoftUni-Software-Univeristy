function carWash(commands) {
    let carStats = 0;

    for (let i = 0; i < commands.length; i++) {
        let currentCommand = commands[i];
        
        if (currentCommand === 'soap') {
            carStats += 10;
        }
        else if (currentCommand === 'vacuum cleaner') {
            carStats *= 1.25;
        }
        else if (currentCommand === 'water') {
            carStats *= 1.2;
        }
        else if (currentCommand === 'mud') {
            carStats -= carStats * 0.1;
        }
    }
    console.log(`The car is ${carStats.toFixed(2)}% clean.`);
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])