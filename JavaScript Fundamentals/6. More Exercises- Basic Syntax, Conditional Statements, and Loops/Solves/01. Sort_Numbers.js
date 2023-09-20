function sortNums(a, b, c) {
    let maxNum = Math.max(a, b, c);
    let minNum = Math.min(a, b, c);
    let midNum = a + b + c - maxNum - minNum;

    console.log(maxNum);
    console.log(midNum);
    console.log(minNum);
}