"use strict";
var email_validator_1 = require("./email-validator");
var chai = require('chai');
var expect = chai.expect;
describe('Standard Pattern EmailValidator', function () {
    beforeEach(function () {
        var config = { message: 'test message' };
        this.emailValidator = new email_validator_1.EmailValidator(config);
    });
    it('should validate derek@derekpavao.com as a valid email', function () {
        expect(this.emailValidator.validate('derek@derekpavao.com')).to.be.true;
    });
    it('should not validate d@g.c as a valid email address', function () {
        expect(this.emailValidator.validate('d@g.c')).to.be.false;
    });
    it('should not validate derp@@@@.com as a valid email address', function () {
        expect(this.emailValidator.validate('derp@@@@.com')).to.be.false;
    });
});
//# sourceMappingURL=email-validator-spec.js.map