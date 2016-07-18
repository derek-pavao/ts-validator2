"use strict";
var chai = require('chai');
var max_length_validator_1 = require("./max-length-validator");
var expect = chai.expect;
describe('MaxLengthValidator', function () {
    beforeEach(function () {
        var config = {
            maxLength: 3,
            message: 'must be at most x'
        };
        this.maxLengthValidator = new max_length_validator_1.MaxLengthValidator(config);
    });
    it('should treat strings with a length less than config.maxLength as valid', function () {
        expect(this.maxLengthValidator.validate('fo')).to.be.true;
    });
    it('should treate strings with a length equal to config.maxLength as valid', function () {
        expect(this.maxLengthValidator.validate('foo')).to.be.true;
    });
    it('should treat strings with a length greater than config.maxLength as invalid', function () {
        expect(this.maxLengthValidator.validate('foobar')).to.be.false;
    });
});
//# sourceMappingURL=max-length-validator-spec.js.map