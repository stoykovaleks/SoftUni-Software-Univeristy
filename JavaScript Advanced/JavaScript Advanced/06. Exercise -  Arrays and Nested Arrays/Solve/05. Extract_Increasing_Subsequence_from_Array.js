function extractIncrSubsFromArr(array) {
    let result = [];
    let biggest = array.shift();
    result.push(biggest);

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= biggest) {
            result.push(array[i]);
            biggest = array[i];
        }

    }
    return result
}

extractIncrSubsFromArr([
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
)