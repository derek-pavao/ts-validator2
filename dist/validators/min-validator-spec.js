"use strict";
var min_validator_1 = require("./min-validator");
var chai = require('chai');
var expect = chai.expect;
describe('MinValidator', function () {
    beforeEach(function () {
        var config = {
            message: 'must be more than x',
            min: 10
        };
        this.minValidator = new min_validator_1.MinValidator(config);
    });
    it('should treat numbers above config.min as valid', function () {
        expect(this.minValidator.validate(11)).to.be.true;
    });
    it('should treat numbers equal to config.min as valid', function () {
        expect(this.minValidator.validate(10)).to.be.true;
    });
    it('should treat numbers less than config.min as invalid', function () {
        expect(this.minValidator.validate(9)).to.be.false;
    });
    it('should convert a string to a number before doing comparison', function () {
        expect(this.minValidator.validate('9')).to.be.false;
    });
    it.skip('should thorw an error if it can not parse the modelValue', function () {
        expect(this.minValidator.validate.bind(this.minValidator, 'dfslkjdfsjlk'))
            .to.throw('the min validator requires that the model value can be parsed into a number');
    });
});
//# sourceMappingURL=min-validator-spec.js.map