const { expect } = require("chai");
const isOddOrEven = require("./02. Even_Or_Odd");

describe('test even or odd functionality', () => {
    it("Should return undefined if parameter not a string", () => {
        expect(isOddOrEven(2)).to.undefined;
    });
    it("Should be odd", () => {
        expect(isOddOrEven("1")).equal("odd");
    });
    it("Should be odd", () =>{
        expect(isOddOrEven("22")).equal("even");
    })
})