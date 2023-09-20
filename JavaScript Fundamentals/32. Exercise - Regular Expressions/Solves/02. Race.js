function Race(input) {
    let racers = input.shift().split(", ");
    let raceObj = {};
    
    const patternName = /[A-Za-z]+/g;
    const patternNums = /[0-9]+/g;

    let command = input.shift();

    while (command !== "end of race") {
        let currentName = command.match(patternName).join('');
        let currentDistance = command.match(patternNums).join('');

        if(racers.includes(currentName)){
            let distance = 0;

            
            for (const digit of currentDistance) {
                distance += Number(digit);
            }

            if(!raceObj.hasOwnProperty(currentName)){
                raceObj[currentName] = distance;
            }
            else{
                raceObj[currentName] += distance;
            }
        }
        command = input.shift();
    }
    let sorted = Object.entries(raceObj).sort((a,b) => b[1]-a[1]);
 
    console.log(`1st place: ${sorted[0][0]}`);
    console.log(`2nd place: ${sorted[1][0]}`);
    console.log(`3rd place: ${sorted[2][0]}`);
}

Race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])