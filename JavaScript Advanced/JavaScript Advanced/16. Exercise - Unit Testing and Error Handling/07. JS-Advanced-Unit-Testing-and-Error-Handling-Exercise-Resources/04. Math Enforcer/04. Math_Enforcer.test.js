const { expect } = require("chai");
const { mathEnforcer } = require("./04. Math_Enforcer")

describe("mathEnforcer", function () {
    describe("AddFive", function () {
        it("Should return undefined if param is not a number", () => {
            expect(mathEnforcer.addFive("a")).to.undefined;
        });
        it("Should return undefined if param is not a number", () => {
            expect(mathEnforcer.addFive(false)).to.undefined;
        });

        it("Should return 10 if param is 5", () => {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });

        it("Should return 17.5 if param is 12.5 ", () => {
            expect(mathEnforcer.addFive(12.5)).to.be.equal(17.5);
        });
        it("Should return 5 if param is 0", () => {
            expect(mathEnforcer.addFive(0)).to.be.equal(5);
        });
        it("Should return -5 if param is -10", () => {
            expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
        });
        it("Should return 100 if param is 95", () => {
            expect(mathEnforcer.addFive(95)).to.be.equal(100);
        });
    });

    describe("subtractTen", function () {
        it("Should return undefined if param is not a number", () => {
            expect(mathEnforcer.subtractTen("test")).to.undefined;
        });

        it("Should return 10 if param is 20", () => {
            expect(mathEnforcer.subtractTen(20)).to.be.equal(10);
        });
        it("Should return 12.5 if param is 22.5 ", () => {
            expect(mathEnforcer.subtractTen(22.5)).to.be.equal(12.5);
        });
        it("Should return -10 if param is 0", () => {
            expect(mathEnforcer.subtractTen(0)).to.be.equal(-10)
        });
    });

    describe("sum", function () {
        it("Should return undefined if num1 is not a number", () => {
            expect(mathEnforcer.sum("test", 2)).to.undefined;
            expect(mathEnforcer.sum("abc", 0)).to.undefined;
            expect(mathEnforcer.sum("test", 10)).to.undefined;

        });

        it("Should return undefined if num2 is not a number", () => {
            expect(mathEnforcer.sum(3, "test")).to.undefined;
            expect(mathEnforcer.sum(0, "abc")).to.undefined;
            expect(mathEnforcer.sum(10, true)).to.undefined;
        });

        it("Should return 35 if num1 is 5 and num2 is 30", () => {
            expect(mathEnforcer.sum(5, 30)).to.be.equal(35);
        });
        it("Should return 3.23 if num1 is 2.13 and num2 is num2 is 1.1", () => {
            expect(mathEnforcer.sum(2.13, 1.1)).to.be.equal(3.23);
        });

        it("Should return -14 if num1 is -10 and num2 is -4", () => {
            expect(mathEnforcer.sum(-10, -4)).to.be.equal(-14);
        });
    });
});