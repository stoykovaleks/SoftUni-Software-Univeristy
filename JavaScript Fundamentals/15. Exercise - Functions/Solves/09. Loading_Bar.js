function loadingBar(percentages) {
    let output = "%";

    if (percentages == 10) {
        output = "%.........";
    }
    else if (percentages == 20) {
        output = "%%........";
    }
    else if (percentages == 30) {
        output = "%%%.......";
    }
    else if (percentages == 40) {
        output = "%%%%......";
    }
    else if (percentages == 50) {
        output = "%%%%%.....";
    }
    else if (percentages == 60) {
        output = "%%%%%%....";
    }
    else if (percentages == 70) {
        output = "%%%%%%%...";
    }
    else if (percentages == 80) {
        output = "%%%%%%%%..";
    }
    else if (percentages == 90) {
        output = "%%%%%%%%%.";
    }
    else if (percentages == 100) {
        output = "%%%%%%%%%%";
    }

    if (percentages !== 100) {
        console.log(`${percentages}% [${output}]`);
        console.log("Still loading...");
    }
    else {
        console.log(`${percentages}% Complete!`);
        console.log(`[${output}]`); 
    }
}

loadingBar(100)