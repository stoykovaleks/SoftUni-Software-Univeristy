function procjectCreation(input){
    let architectName = input[0];
    let counts = Number(input[1]);
    let neededTime = counts * 3;

    console.log(`The architect ${architectName} will need ${neededTime} hours to complete ${counts} project/s.`);
}

procjectCreation(['George', '4'])