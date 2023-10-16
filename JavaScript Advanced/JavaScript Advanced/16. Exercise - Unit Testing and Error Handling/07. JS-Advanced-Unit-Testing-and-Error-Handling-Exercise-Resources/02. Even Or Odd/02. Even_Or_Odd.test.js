const { expect } = require("chai");
const isOddOrEven = require("./02. Even_Or_Odd");

describe('test even or odd functionality', function (){
    it('Test for undefined', function(){
        expect(isEvenOrOdd()).to.be.equal(undefined);
    });

    it('Test for even', function(){
        expect(isEvenOrOdd('abcd')).to.be.equal('even');
    });

    it('Test for even', function(){
        expect(isEvenOrOdd('abc')).to.be.equal('odd');
    });
    
})