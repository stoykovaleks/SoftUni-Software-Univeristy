function checkDivisibility(num) {
    let divisible = 0;

    if (num % 2 === 0) {
        divisible = 2;
        if (num % 3 === 0) {
            divisible = 6;
        }
        if (num % 10 === 0) {
            divisible = 10;
        }
    } else if (num % 3 === 0) {
        divisible = 3;
    } else if (num % 7 === 0) {
        divisible = 7;
    }

    if (divisible === 0) {
        return "Not divisible";
    } else if (divisible === 2 && num % 10 === 0) {
        return "The number is divisible by 10";
    } else {
        return "The number is divisible by " + divisible;
    }
}
{
checkDivisibility([""]);