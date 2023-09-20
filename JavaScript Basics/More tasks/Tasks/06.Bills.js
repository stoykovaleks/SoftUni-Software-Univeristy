function bills(input) {
    let countMonths = Number(input[0]);

    let elBills = 0;
    let waterBill = 20;
    let internetBill = 15;
    let otherBills = 0;
    let other = 0;
    let average = 0;

    for (let months = 1; months <= countMonths; months++) {

        let elecricityBill = Number(input[months]);

        elBills += elecricityBill;
        otherBills = (elecricityBill + waterBill + internetBill) * 1.2;
        other += otherBills;
    }
    average = (elBills + (waterBill * countMonths) + (internetBill * countMonths) + other) / countMonths;

    console.log(`Electricity: ${elBills.toFixed(2)} lv`);
    console.log(`Water: ${(waterBill * countMonths).toFixed(2)} lv`)
    console.log(`Internet: ${(internetBill * countMonths).toFixed(2)} lv`)
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`)
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"])