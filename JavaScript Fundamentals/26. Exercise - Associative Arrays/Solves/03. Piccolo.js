function piccolo(input) {
    let parking = new Set();

    for (const list of input) {
        let [direction, carNumberPlate] = list.split(", ");

        if (direction === "IN") {
            parking.add(carNumberPlate);
        }
        else if (direction === "OUT") {
            parking.delete(carNumberPlate);
        }
    }
    if (parking.size === 0) {
        console.log("Parking Lot is Empty");
    }
    else{
        let sorted = Array.from(parking).sort();
        sorted.forEach(carNum => console.log(carNum));
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])