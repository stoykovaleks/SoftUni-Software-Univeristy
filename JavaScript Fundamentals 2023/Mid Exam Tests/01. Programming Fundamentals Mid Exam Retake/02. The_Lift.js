function theLift(array) {
    let peopleCount = Number(array.shift());
    let wagons = array.shift().split(" ").map(Number);
    let spots = 0;

    for (let index = 0; index < wagons.length; index++) {
        spots += 4 - wagons[index];
        console.log(spots);
    }

}

theLift(["15", "0 0 0 0 0"])