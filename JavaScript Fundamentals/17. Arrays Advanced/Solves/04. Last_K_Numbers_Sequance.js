function LastKNumbersSequance(n, k){
    let sum = [1];

    for (let i = 1; i < n; i++) {
        let element = 0;
        for (let j = i - 1; j >= i - k; j--) {
            if (j >= 0) {
              element += sum[j];
            }
        }
        sum.push(element);
    }
    console.log(sum.join(" "));
}

LastKNumbersSequance(6, 3)