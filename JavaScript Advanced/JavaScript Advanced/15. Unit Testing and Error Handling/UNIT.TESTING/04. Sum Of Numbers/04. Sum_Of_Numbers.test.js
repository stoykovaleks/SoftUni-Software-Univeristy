const expect = require('chai').expect;
const { assert } = require('chai');
const { sum } = require('./04. Sum_Of_Numbers');

describe('sum', function() {
    it('Should sum the numbers in array', () => {
        expect(sum([1,2,3])).to.be.equal(6);
    })

    it('Should return 0 if we pass empty array', () => {
        expect(sum([])).to.be.equal(0);
    })

    it('Should return NaN if we pass string param', () => {
        assert.isNaN(sum(['mario', 'aleks', '10']))
    })
})