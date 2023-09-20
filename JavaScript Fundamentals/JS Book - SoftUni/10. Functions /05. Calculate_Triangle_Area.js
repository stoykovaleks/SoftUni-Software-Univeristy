function calculateTriangleArea(length, heigth){
    let a = parseFloat(length);
    let b = parseFloat(heigth);

    let area = getTriangleArea(a, b);
    console.log(area);
}

function getTriangleArea(a, b) {
    return (a * b) / 2;
}

calculateTriangleArea(3,)