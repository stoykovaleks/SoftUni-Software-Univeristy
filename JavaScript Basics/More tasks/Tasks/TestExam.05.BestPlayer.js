function bestPlayer(input) {
    let index = 0;

    let command = input[index];
    index++;

    let max = 0;
    let bestName = "";

    while (command !== "END") {
        let playerName = command;
        let currentGoal = Number(input[index]);
        index++;

        if (currentGoal > max) {
            max = currentGoal;
            bestName = playerName;
        }
        if (max >= 10){
            break;
        }

        command = input[index];
        index++;
    }
    if (max >= 3) {
        console.log(`${bestName} is the best player!`);
        console.log(`He has scored ${max} goals and made a hat-trick !!!`);
    } else {
        console.log(`${bestName} is the best player!`);
        console.log(`He has scored ${max} goals.`);
    }
}


bestPlayer(["Neymar",
    "2",
    "Ronaldo",
    "1",
    "Messi",
    "3",
    "END"])

// let i = 0;
// let max = 0;
// let best;
// while (input[i] != "END") {
//     let name = input[i];
//     let br = Number(input[i + 1]);
//     if (br > max) {
//         max = br;
//         best = name;
//     }
//     if (max >= 10) break;
//     i += 2;
// }
// console.log(`${best} is the best player!`);
// if (max >= 3) console.log(`He has scored ${max} goals and made a hat-trick !!!`);
// else console.log(`He has scored ${max} goals.`);
// }