function substitute(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let four = Number(input[3]);

    let changesCount = 0;

    for (let k = first; k <= 8; k++) {

        for (let l = 9; l >= second; l--) {

            for (let m = third; m <= 8; m++) {

                for (let n = 9; n >= four; n--) {

                    if (k == m && l == n && k % 2 == 0 && l % 2 != 0) {
                        console.log("Cannot change the same player.");
                    } 
                    else if (k % 2 == 0 && l % 2 != 0 && m % 2 == 0 && n % 2 != 0) {

                        console.log(`${k}${l} - ${m}${n}`);
                        changesCount++;
                        
                        if (changesCount >= 6) {
                            break;
                        }
                    }
                }
                if (changesCount >= 6) {
                    break;
                }
            }
            if (changesCount >= 6) {
                break;
            }
        }
        if (changesCount >= 6) {
            break;
        }
    }
}


substitute(["7",
    "6",
    "8",
    "5"])

