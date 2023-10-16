function sortingNums(arr) {
    let sorted = arr.sort((a, b) => a - b);
    let output = [];
    let left = 0;
    let right = sorted.length - 1;

    while (left <= right) {
        if (left === right) {
            output.push(arr[left]);
        }
        else {
            output.push(arr[left]);
            output.push(arr[right]);
        }
        left++;
        right--;
    }
    return output
}

sortingNums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])