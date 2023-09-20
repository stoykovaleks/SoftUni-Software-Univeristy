function nXnMatrix(count) {

    for (let i = 0; i < count; i++) {
        let row = '';
        for (let j = 0; j < count; j++) {
            row += count + ' ';
        }
        console.log(row);
    }
}

nXnMatrix(3)