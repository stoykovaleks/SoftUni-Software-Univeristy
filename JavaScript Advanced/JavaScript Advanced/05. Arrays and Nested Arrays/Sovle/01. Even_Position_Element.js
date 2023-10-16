function evenPositionElement(array) {
    let output = [];

    for (let i = 0; i < array.length; i+=2) {
        output.push(array[i]);
    }
    console.log(output.join(" "));
}

evenPositionElement(['20', '30', '40', '50', '60'])