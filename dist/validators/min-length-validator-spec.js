"use strict";
var chai = require('chai');
var min_length_validator_1 = require("./min-length-validator");
var expect = chai.expect;
describe('MinLengthValidator', function () {
    beforeEach(function () {
        var config = {
            message: 'must be longer than x',
            minLength: 3
        };
        this.minLengthValidator = new min_length_validator_1.MinLengthValidator(config);
    });
    it('should treat strings with a length greater than config.minLength as valid', function () {
        expect(this.minLengthValidator.validate('foobar')).to.be.true;
    });
    it('should treat strings with a length equal to config.minLength as valid', function () {
        expect(this.minLengthValidator.validate('foo')).to.be.true;
    });
    it('should treat strings with a length less than config.minLength as invalid', function () {
        expect(this.minLengthValidator.validate('12')).to.be.false;
    });
});
//# sourceMappingURL=min-length-validator-spec.js.map