function blackFlag(array) {
    let countDays = Number(array.shift());
    let dailyPlunder = Number(array.shift());
    let targetPlunder = Number(array.shift());
    let totalPlunder = 0;

    for (let day = 1; day <= countDays; day++) {
        totalPlunder += dailyPlunder;

        if (day % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5;
        }
        if (day % 5 === 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
    }
    let percentage = (totalPlunder / targetPlunder) * 100;
    
    if (totalPlunder >= targetPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
    else {
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

blackFlag((["5", "40", "100"]))
console.log('---------');
blackFlag((["10", "20", "380"]))