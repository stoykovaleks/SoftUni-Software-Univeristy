function biggestElement(matrix) {
    let biggestElement = matrix[0][0];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > biggestElement) {
                biggestElement = matrix[row][col];
            }
        }
    }
    return biggestElement
}
biggestElement([[20, 50, 10], [8, 33, 145]])