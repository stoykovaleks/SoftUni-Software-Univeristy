function maxSequenceOfEqualElements(array) {

    let longestSequence = [];
    let currentSequence = [];

    for (let i = 0; i < array.length; i++) {

        if (currentSequence.length === 0 || array[i] === currentSequence[0]) {
            currentSequence.push(array[i]);
        }
        else {
            if (currentSequence.length > longestSequence.length) {
                longestSequence = currentSequence;
            }
            currentSequence = [array[i]];
        }
    }

    if (currentSequence.length > longestSequence.length) {
        longestSequence = currentSequence;
    }

    console.log(longestSequence.join(" "));
}

maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])