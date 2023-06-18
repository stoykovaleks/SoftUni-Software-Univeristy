function numbers(input) {
    let sequence = input.shift().split(" ").map(Number);
    let commands = input.slice(1);
    let index = 0;

    while (commands !== "Finish") {
        let [action, value, replacement] = commands[index].split(" ");

        switch (action) {
            case "Add":
                sequence.push(Number(value));
                break;

            case "Remove":
                let removeIndex = sequence.indexOf(Number(value));
                if (removeIndex !== -1) {
                    sequence.splice(removeIndex, 1);
                }
                break;

            case "Replace":
                let replaceIndex = sequence.indexOf(Number(value));
                if (replaceIndex !== -1) {
                    sequence[removeIndex] = Number(replacement);
                }
                break;

            case "Collappse":
                sequence = sequence.filter(n => n >= (Number(value)));
                break;
        }
        commands = input[index];
        index++;
    }
    console.log(sequence.join(" "));
}

numbers((["1 4 5 19", "Add 1", "Remove 4", "Finish"]))
console.log("--------");
numbers((["1 20 -1 10", "Collapse 8", "Finish"]))