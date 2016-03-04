import * as chai from 'chai';
import {AllowedValuesValidator} from "./allowed-values-validator";
const expect = chai.expect;

describe('AllowedValuesValidator', function () {

    beforeEach(function () {
        const config = {
            values: ['one', 'two', 5]
        };

        this.allowedValuesValidator = new AllowedValuesValidator(config);
    });

    it ('should treat values that ar in config.allowedValues as valid', function () {
        expect(this.allowedValuesValidator.validate('one')).to.be.true;
    });

    it ('should treat values that are not in config.allowedValues as invalid', function () {
        expect(this.allowedValuesValidator.validate('three')).to.be.false;
    });

    it ('should support lists of values of any/mixed type', function () {
        expect(this.allowedValuesValidator.validate('two')).to.be.true;
        expect(this.allowedValuesValidator.validate(5)).to.be.true;
    });


});
