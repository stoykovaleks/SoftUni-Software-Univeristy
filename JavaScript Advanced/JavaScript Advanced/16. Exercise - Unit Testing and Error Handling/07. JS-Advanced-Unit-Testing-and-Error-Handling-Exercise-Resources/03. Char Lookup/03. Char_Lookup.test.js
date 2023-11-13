const { expect } = require("chai");
const { lookUpChar: lookupChar } = require("./03. Char_Lookup");

describe("Char_Lookup", () => {
    it("Should return undefined if string is not a string",() => {
        expect(lookupChar(2, 5)).to.undefined;
        expect(lookupChar(false, 5));
    });

    it("Should return return undefined if index is not a integer", () => {
        expect(lookupChar("string", "2")).to.undefined;
        expect(lookupChar("string", true)).to.undefined;
    });

    it("Should return 'Incorrect index' if index is bigger than string length", () => {
        expect(lookupChar("string", 16)).to.equal('Incorrect index');
    });

    it("Should return 'Incorrect index' if index is less than zero", () => {
        expect(lookupChar("abc", -2)).to.equal('Incorrect index');
    });

    it("Should return 'Incorrect index' if index is equal ot the string length", () => {
        expect(lookupChar("abc", 3)).to.equal('Incorrect index');
    });

    it("Should return the correct character at index zero", () => {
        expect(lookupChar("abc", 0)).to.equal('a');
    });
    
    it("Should return the correct character if the index is the last of the string", () => {
        expect(lookupChar("abc", 2)).to.equal("c")
    });
});