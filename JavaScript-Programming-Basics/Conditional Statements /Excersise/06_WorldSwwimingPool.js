function worldSwwimingPool (input){
    let worldRecord = Number (input[0]);
    let distance = Number (input[1]);
    let timeInSeconds = Number (input[2]);

    let ivanNeededTime = distance * timeInSeconds;
    let delay = Math.floor(distance / 15) * 12.5;
    let totalTime = ivanNeededTime + delay;

    if (totalTime < worldRecord){
        console.log (`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    }
    else 
    {
        console.log (`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`);
    }
    
}

worldSwwimingPool (["55555.67","3017","5.03"])
