function searchForANumber(sequence, [takeCount, deleteCount, searchNumber]) {
    let selectedElements = sequence.slice(0, takeCount);

    for (let i = 0; i < deleteCount; i++) {
        selectedElements.shift();
    }

    let count = selectedElements.filter(num => num === searchNumber).length;
    console.log(`Number ${searchNumber} occurs ${count} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])