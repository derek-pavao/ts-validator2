"use strict";
var pattern_validator_1 = require("./pattern-validator");
var chai = require('chai');
var expect = chai.expect;
describe('PatternValidator', function () {
    beforeEach(function () {
        var config = {
            pattern: /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/
        };
        this.patternValidator = new pattern_validator_1.PatternValidator(config);
    });
    it('should treate empty string values as valid', function () {
        expect(this.patternValidator.validate('')).to.be.true;
    });
    it('should identify 900-649-2568 as a valid pattern', function () {
        expect(this.patternValidator.validate('900-649-2568')).to.be.true;
    });
    it('should identify (900)-649-2568 as an invalid pattern', function () {
        expect(this.patternValidator.validate('(900)-649-2568')).to.be.false;
    });
});
//# sourceMappingURL=pattern-validator-spec.js.map