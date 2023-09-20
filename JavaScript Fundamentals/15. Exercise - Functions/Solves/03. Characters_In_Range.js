function charachtersInRange(startChr, endChr) {
    let output = [];

    let startLikeAsci = startChr.charCodeAt(0);
    let endLikeAsci = endChr.charCodeAt(0);
    let minCode = Math.min(startLikeAsci, endLikeAsci);
    let maxCode = Math.max(startLikeAsci, endLikeAsci);

    for (let i = minCode + 1; i < maxCode; i++) {
        output.push(String.fromCharCode(i));
    }
    console.log(output.join(' '));
}

charachtersInRange('C', '#')