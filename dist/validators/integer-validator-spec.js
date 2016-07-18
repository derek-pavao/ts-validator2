"use strict";
var integer_validator_1 = require("./integer-validator");
var chai = require('chai');
var expect = chai.expect;
describe('IntegerValidator', function () {
    beforeEach(function () {
        this.integerValidator = new integer_validator_1.IntegerValidator();
    });
    it('should treat an integer as valid', function () {
        expect(this.integerValidator.validate(9)).to.be.true;
    });
    it('should treat a float as invalid', function () {
        expect(this.integerValidator.validate(10.5)).to.be.false;
    });
    it('should treat empty as valid', function () {
        expect(this.integerValidator.validate('')).to.be.true;
        expect(this.integerValidator.validate(' ')).to.be.true;
    });
    it('should treat a large number as valid', function () {
        expect(this.integerValidator.validate(2220000)).to.be.true;
    });
    it('should treat 0 as valid', function () {
        expect(this.integerValidator.validate(0)).to.be.true;
    });
    it('should treat negative integers as valid', function () {
        expect(this.integerValidator.validate(-299)).to.be.true;
    });
    it('should treat numeric strings that contain integers as valid', function () {
        expect(this.integerValidator.validate('21')).to.be.true;
    });
    it('should treat numeric strings that contain floats as invalid', function () {
        expect(this.integerValidator.validate('21.04')).to.be.false;
    });
});
//# sourceMappingURL=integer-validator-spec.js.map