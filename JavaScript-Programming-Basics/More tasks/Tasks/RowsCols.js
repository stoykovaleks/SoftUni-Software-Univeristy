function solve(n) {

    for (let row = 1; row <= n; row++) {

        let output = "*".repeat()
        let space = " ".repeat();

        for (let col = 1; col <= row; col++) {
            output += "* ";

        }
        console.log(space + output);
    }

    for (let row = n; row >= 1; row--) {

        let output = "*".repeat();
        let space = " ".repeat();

        for (let col = n - 1; col >= 1; col--) {

            output += "* ";

        }
        console.log(space + output);
    }
}

solve(4)