function magicSum(arr, targetSum) {
    let pairs = {};

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                let pair = [arr[i], arr[j]];
                pairs[pair.join(" ")] = true;
            }
        }
    }

    for (const pairString in pairs) {
        console.log(pairString);
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)