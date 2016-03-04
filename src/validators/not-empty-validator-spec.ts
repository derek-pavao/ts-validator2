import * as chai from 'chai';
import {NotEmptyValidator} from "./not-empty-validator";

var expect = chai.expect;

describe('NotEmptyValidator', function () {


    beforeEach(function () {
        this.notEmptyValidator = new NotEmptyValidator();

    });

    it ('should implement the IValidatorObject interface', function () {
        expect(this.notEmptyValidator).to.have.all.keys('name', 'defaultMessage', 'config');

        expect(this.notEmptyValidator.validate).to.not.be.undefined;
    });

    it ('should treat undefined as invalid', function () {
        expect(this.notEmptyValidator.validate(void 0)).to.be.false;
        expect(this.notEmptyValidator.validate()).to.be.false;
    });

    it ('should treat empty strings as invalid', function () {
        expect(this.notEmptyValidator.validate('')).to.be.false;
    });

    it ('should ignore spaces in strings', function () {
        expect(this.notEmptyValidator.validate('  ')).to.be.false;
    });

    it ('should treat numbers as valid', function () {
        expect(this.notEmptyValidator.validate(20)).to.be.true;
    });

    it ('should treat the number 0 as a valid value', function () {
        expect(this.notEmptyValidator.validate(0)).to.be.true;
    });

    it ('should treat an empty object as invalid', function () {
        expect(this.notEmptyValidator.validate({})).to.be.false;
    });

    it ('should treat an empty array as invalid', function () {
        expect(this.notEmptyValidator.validate([])).to.be.false;
    });

    it ('should treat a string with at least one character as valid', function () {
        expect(this.notEmptyValidator.validate('d')).to.be.true;
    });

    it ('should treat objects with at least one property as valid', function () {
        expect(this.notEmptyValidator.validate({test: false})).to.be.true;
    });

    it ('should treat arrays with at least one object as valid', function () {
        expect(this.notEmptyValidator.validate(['test'])).to.be.true;
    });

});
