function pieceOfPie(array, start, end) {
    let startIndex = array.indexOf(start);
    let endIndex = array.indexOf(end);

    if (startIndex === -1 || endIndex === -1) {
        return [];
    }

    let section = array.slice(startIndex, endIndex + 1);

    return section;
}

pieceOfPie([
    'Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'
)