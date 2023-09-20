function printPyramid(n) {
    let number = 1;
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += number + " ";
            number++;
            if (number > n) {
                break;
            }
        }
        console.log(row);
        if (number > n) {
            break;
        }
    }
}


printPyramid(["7"])