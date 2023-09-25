function diagonalSums(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;

    for (let row = 0; row < matrix.length; row++) {
        mainDiagonalSum += matrix[row][row];
        secondaryDiagonalSum += matrix[row][matrix.length - 1 - row];
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

diagonalSums([[20, 40], [10, 60]])