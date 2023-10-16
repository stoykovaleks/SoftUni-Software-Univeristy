const expect = require("chai").expect;
const { sum, multiply, divide } = require('./num-units.js');

describe("sum", function () {
    it('should sum two numbers', function () {
        const numOne = 2;
        const numTwo = 3;

        const result = sum(numOne, numTwo);

        expect(sum(result)).to.be.equal(5);
    })

    
});