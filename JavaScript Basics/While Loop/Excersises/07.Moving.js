function moving(input) {
    let index = 0;

    let width = Number(input[index]);
    index++;

    let length = Number(input[index]);
    index++;

    let hight = Number(input[index]);
    index++;

    let cubicMeters = width * length * hight;
    let boxes = 0;

    let command = input[index];
    index++;

    while (command !== "Done") {
        let current = Number(command);

        boxes += current;

        if (cubicMeters < boxes) {
            console.log(`No more free space! You need ${Math.abs(cubicMeters - boxes)} Cubic meters more.`);
            return;
        }

        command = input[index];
        index++;
    }
 
    if (command === "Done") {
        console.log(`${boxes} Cubic meters left.`);
    }
}

moving(["10",
    "1",
    "2",
    "4",
    "6",
    "Done"])
