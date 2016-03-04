import * as chai from 'chai';
import {MaxLengthValidator} from "./max-length-validator";
const expect = chai.expect;

describe('MaxLengthValidator', function () {

    beforeEach(function () {
        const config = {
            maxLength: 3,
            message: 'must be at most x'
        };

        this.maxLengthValidator = new MaxLengthValidator(config);
    });

    it ('should treat strings with a length less than config.maxLength as valid', function () {
        expect(this.maxLengthValidator.validate('fo')).to.be.true;
    });

    it ('should treate strings with a length equal to config.maxLength as valid', function () {
        expect(this.maxLengthValidator.validate('foo')).to.be.true;
    });

    it ('should treat strings with a length greater than config.maxLength as invalid', function () {
        expect(this.maxLengthValidator.validate('foobar')).to.be.false;
    });
});
