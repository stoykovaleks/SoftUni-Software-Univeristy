const expect = require('chai').expect;
const assert = require('chai').assert;
const { rgbToHexColor } = require('./06. RGB_To_Hex');

describe('isSymmetric', function () {
    it('Should return white color ', () => {
        expect(rgbToHexColor(255,255,255)).to.be.equal('#FFFFFF');
    })

    it('Should return black color ', () => {
        expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
    })

    it('Should return undefined ', () => {
        expect(rgbToHexColor()).to.be.undefined;
    })

    it('Should return undefined ', () => {
        expect(rgbToHexColor(212)).to.be.undefined;
    })

    it('Should return undefined for values out of range ', () => {
        expect(rgbToHexColor(-12, 322,900)).to.be.undefined;
    })
})