function lastKNumSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let sum = 0;
        let startIndex = Math.max(0, i - k);

        for (let j = startIndex; j < i; j++) {
            sum += sequence[j];
        }
        sequence.push(sum);
    }

    return sequence;
}

lastKNumSequence(6, 3)