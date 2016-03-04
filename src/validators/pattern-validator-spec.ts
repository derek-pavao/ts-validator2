import {PatternValidator} from "./pattern-validator";
import * as chai from 'chai';
const expect = chai.expect;

describe ('PatternValidator', function () {


    beforeEach(function () {
        const config = {
            pattern: /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/
        };

        this.patternValidator = new PatternValidator(config);
    });

    it ('should treate empty string values as valid', function () {
        expect(this.patternValidator.validate('')).to.be.true;
    });


    it ('should identify 900-649-2568 as a valid pattern', function () {
        expect(this.patternValidator.validate('900-649-2568')).to.be.true;
    });

    it ('should identify (900)-649-2568 as an invalid pattern', function () {
        expect(this.patternValidator.validate('(900)-649-2568')).to.be.false;
    });

});
