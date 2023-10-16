function magicMatrices(matrix) {
    let referenceSum = matrix[0].reduce((sum, num) => sum + num, 0);

    for (let i = 1; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((sum, num) => sum + num, 0);
        if (rowSum !== referenceSum) {
            return false;
        }
    }

    for (let j = 0; j < matrix[0].length; j++) {
        let columnSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            columnSum += matrix[i][j];
        }
        if (columnSum !== referenceSum) {
            return false;
        }
    }
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
)