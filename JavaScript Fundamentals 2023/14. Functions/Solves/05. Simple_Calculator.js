let calculate = (numOne, numTwo, operator) => {
    let operations = {

        multiply: (a, b) => (a * b),
        divide: (a, b) => (a / b),
        add: (a, b) => (a + b),
        substract: (a, b) => (a - b),
    };
    return operations[operator](numOne, numTwo) || 'Invalid operator';
};

console.log(calculate(5, 5, 'multiply'))


