import {MaxValidator} from "./max-validator";
import * as chai from 'chai';
const expect = chai.expect;

describe('MaxValidator', function () {

    beforeEach(function () {
        const config = {
            max: 10,
            message: 'must be less than x'
        };

        this.maxValidator = new MaxValidator(config);
    });


    it ('should treat numbers below config.max as valid', function () {
        expect(this.maxValidator.validate(9)).to.be.true;
    });

    it ('should treat numbers equal to config.max as valid', function () {
        expect(this.maxValidator.validate(10)).to.be.true;
    });

    it ('should treat numbers greater than config.max as invalid', function () {
        expect(this.maxValidator.validate(11)).to.be.false;
    });

    it ('should treat numeric strings as numbers when doing validation', function () {
        expect(this.maxValidator.validate('10')).to.be.true;
        expect(this.maxValidator.validate('11')).to.be.false;
    });
});
