const expect = require('chai').expect;
const { assert } = require('chai');
const { isSymmetric } = require('./05. Check_For_Symmetry');

describe('isSymmetric', function () {
    it('Should return true for symmetric array', () => {
        expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
    })

    it('Should return false for incorrect type', () => {
        expect(isSymmetric([1, 2, 3, 4, 1, 2])).to.be.false;
    })

    it('Should return false if input not array ', () => {
        expect(isSymmetric(33)).to.be.false;
    })
    it('Should return false if input not array ', () => {
        expect(isSymmetric('aleks')).to.be.false;
    })
    it('Should return false if input not array ', () => {
        expect(isSymmetric('%!')).to.be.false;
    })

    it('Should return false if input not array ', () => {
        expect(isSymmetric(Number)).to.be.false;
    })

    it('Should return false if input not array ', () => {
        expect(isSymmetric(String)).to.be.false;
    })

    it("should return false for input that is not an array", () => {
        const notAnArray = "not an array";
        expect(isSymmetric(notAnArray)).to.be.false;
    });
})
