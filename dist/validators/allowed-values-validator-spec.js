"use strict";
var chai = require('chai');
var allowed_values_validator_1 = require("./allowed-values-validator");
var expect = chai.expect;
describe('AllowedValuesValidator', function () {
    beforeEach(function () {
        var config = {
            values: ['one', 'two', 5]
        };
        this.allowedValuesValidator = new allowed_values_validator_1.AllowedValuesValidator(config);
    });
    it('should treat values that ar in config.allowedValues as valid', function () {
        expect(this.allowedValuesValidator.validate('one')).to.be.true;
    });
    it('should treat values that are not in config.allowedValues as invalid', function () {
        expect(this.allowedValuesValidator.validate('three')).to.be.false;
    });
    it('should support lists of values of any/mixed type', function () {
        expect(this.allowedValuesValidator.validate('two')).to.be.true;
        expect(this.allowedValuesValidator.validate(5)).to.be.true;
    });
});
//# sourceMappingURL=allowed-values-validator-spec.js.map