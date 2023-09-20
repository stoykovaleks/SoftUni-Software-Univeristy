function sortNumbers(a, b, c) {
    
    let max = Math.max(a, b, c);
    let min = Math.min(a, b, c);
    let mid = (a + b + c) - (max + min);

    console.log(max);
    console.log(mid);
    console.log(min);
}
sortNumbers(2, 1, 3)
