function printingTriangle(start, end) {
    for (let i = 1; i <= end; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }

    for (let i = end - 1; i >= 1; i--) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row);
    }
}

printingTriangle(1, 3)