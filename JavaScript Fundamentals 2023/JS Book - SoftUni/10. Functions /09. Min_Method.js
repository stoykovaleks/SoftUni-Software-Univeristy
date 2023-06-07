function solve(x, y, z) {
    let min = getMin(getMin(x, y), z);
    console.log(min);

    function getMin(a, b) {
        if (a < b) {
            return a;
        }
        else {
            return b;
        }
    }
}
solve(1, 2, 3)