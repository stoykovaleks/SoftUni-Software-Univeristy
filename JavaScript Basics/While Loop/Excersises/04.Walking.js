function walking(input) {
    let index = 0;

    let command = input[index];
    index++;

    let walkedSteps = 0;

    while (command !== "Going home") {

        let steps = Number(command);
        walkedSteps += steps;

        if (walkedSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${walkedSteps - 10000} steps over the goal!`);
            return;
        }

        command = input[index];
        index++;

    }

    if (command == "Going home") {
        let lastStep = Number(input[index]);
        walkedSteps += lastStep;

        if (walkedSteps >= 10000) {
            console.log("Goal reached! Good job!");
            console.log(`${walkedSteps - 10000} steps over the goal!`);
        }
        else if (walkedSteps < 10000) {
            console.log(`${10000 - walkedSteps} more steps to reach goal.`);
        }
    }
}

walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"])

