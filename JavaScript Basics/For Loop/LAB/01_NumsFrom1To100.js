function sumDigits(num) {
    var digits = num.toString().split("");
    var sum = digits.reduce(function(acc, val) {
        return acc + parseInt(val);
    }, 0);
    return sum;
}
console.log(sumDigits(564891));