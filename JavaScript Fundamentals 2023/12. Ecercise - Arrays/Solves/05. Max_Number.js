function maxNumber(array) {
    let biggest = [];

    for (let i = 0; i < array.length; i++) {
        let isTopInteger = true;

        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isTopInteger = false;
                break;
            }
        }

        if (isTopInteger) {
            biggest.push(array[i]);
        }
    }
    console.log(biggest.join(" "));
}

maxNumber([1, 4, 3, 2])