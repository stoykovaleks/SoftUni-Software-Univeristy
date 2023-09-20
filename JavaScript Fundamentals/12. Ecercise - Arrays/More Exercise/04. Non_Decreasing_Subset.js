function nonDecreasingSubset(array){
    let currentMaxDigit = Number.MIN_SAFE_INTEGER;
    let newArray = [];

    for (let index = 0; index < array.length; index++) {
        if (array[index] >= currentMaxDigit){
            currentMaxDigit = array[index];
            newArray += currentMaxDigit + " ";
        }
    }
    console.log(newArray);
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])