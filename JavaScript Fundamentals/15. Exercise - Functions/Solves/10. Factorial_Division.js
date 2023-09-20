function calculateFactorialAndDivide(num1, num2) {
    let factorial1 = calculateFactorial(num1);
    let factorial2 = calculateFactorial(num2);
    let division = factorial1 / factorial2;
    let formattedDivision = division.toFixed(2);

    console.log(`${formattedDivision}`);

    function calculateFactorial(num) {
        if (num === 0 || num === 1) {
            return 1;
        }

        let factorial = 1;
        for (let i = 2; i <= num; i++) {
            factorial *= i;
        }
        return factorial;
    }
}