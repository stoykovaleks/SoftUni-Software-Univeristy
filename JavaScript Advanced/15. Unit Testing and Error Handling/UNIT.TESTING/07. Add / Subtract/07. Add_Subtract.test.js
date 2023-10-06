const expect = require('chai').expect;
const assert = require('chai').assert;
const { createCalculator } = require('./07. Add_Subtract');

describe('createCalculator', function () {
    it("should create a calculator object with initial value 0", () => {
        let calculator = createCalculator();
        expect(calculator.get()).to.equal(0);
      });
    
      it("should add numbers correctly", () => {
        let calculator = createCalculator();
        calculator.add(5);
        calculator.add("10");
        expect(calculator.get()).to.equal(15);
      });
    
      it("should subtract numbers correctly", () => {
        let calculator = createCalculator();
        calculator.subtract(5);
        calculator.subtract("10");
        expect(calculator.get()).to.equal(-15);
      });

      it("should handle non-numeric inputs gracefully", () => {
        let calculator = createCalculator();
        calculator.add("abc"); 
        calculator.subtract("xyz");
        calculator.add(true); 
        calculator.subtract(null); 
        expect(calculator.get()).to.be.NaN; 
      });
})