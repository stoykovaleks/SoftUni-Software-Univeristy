function triangleOfNumbers(n) {

    for (let rows = 1; rows <= n; rows++) {
        let line = " ";

        for (let cols = 1; cols <= rows; cols++) {
            line += rows + " ";
        }
        console.log(line);
    }
}

triangleOfNumbers(3);