function movingTarget(input) {
    let targets = input.shift().split(" ").map(Number);
    let i = 0;
    let command = input[i];

    while (command !== "End") {
        let [action, index, power] = command.split(" ");

        switch (action) {
            case "Shoot":
                index = Number(index);
                power = Number(power);
                if (index >= 0 && index < targets.length) {
                    targets[index] -= power;
                    if (targets[index] <= 0) {
                        targets.splice(index, 1);
                    }
                }
                break;

            case "Add":
                index = Number(index);
                power = Number(power);
                if (index >= 0 && index < targets.length) {
                    targets.splice(index, 0, power);
                } else {
                    console.log('Invalid placement!');
                }
                break;

            case "Strike":
                index = Number(index);
                power = Number(power);
                let start = index - power;
                let end = index + power;
                if (start >= 0 && end < targets.length) {
                    targets.splice(start, end);
                } else {
                    console.log("Strike missed!");
                }
                break;
        }
        i++;
        command = input[i];
    }
    console.log(targets.join("|"));
}
movingTarget(["1 2 3 4 5", "Strike 0 1", "End"])