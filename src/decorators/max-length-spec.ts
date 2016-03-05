import {BaseModel} from "../models/base-model";
import {ModelProp} from "./model-prop";
import {MaxLength} from "./max-length";
import * as chai from 'chai';
const expect = chai.expect;

describe('@MaxLength()', function () {

    beforeEach(function () {
        this.testModel = new TestModel();
    });

    it ('should return an error when config.maxLength is exceeded', function () {
        this.testModel.firstName = 'Derek Pavao';
        let errors = this.testModel.getErrors();

        expect(errors.firstName).to.be.instanceOf(Array);
    });

    it ('should not return an error when config.maxLength is equal to length', function () {
        this.testModel.firstName = 'Derek';
        let errors = this.testModel.getErrors();

        expect(errors).to.be.null;
    });

    it ('should not return an error when config.maxLength is NOT exceeded', function () {
        this.testModel.firstName = 'D';
        let errors = this.testModel.getErrors();

        expect(errors).to.be.null;
    });
});


class TestModel extends BaseModel {

    @ModelProp()
    @MaxLength({maxLength: 5})
    public firstName: string;
}
