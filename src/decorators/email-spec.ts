import {BaseModel} from "../models/base-model";
import * as chai from 'chai';
import {ModelProp} from "./model-prop";
import {Email} from "./email";

const expect = chai.expect;

describe('@Email()', function () {
    beforeEach(function () {
        this.testModel = new TestModel();
    });

    it ('should return errors for an email such as derek@derekpavao.com as valid', function () {
        this.testModel.emailAddress = 'derek@derekpavao.com';
        let errors = this.testModel.getErrors();

        expect(errors).to.be.null;
    });

    it ('should return errors for an email such as d@p.c as invalid', function () {
        this.testModel.emailAddress = 'd@p.c';
        let errors = this.testModel.getErrors();

        expect(errors.emailAddress).to.be.instanceOf(Array);
    });

    it ('should return errors for an email such as Derp@@@@.com', function () {
        this.testModel.emailAddress = 'Derp@@@@.com';
        let errors = this.testModel.getErrors();

        expect(errors.emailAddress).to.be.instanceOf(Array);
    });
});

class TestModel extends BaseModel {

    @ModelProp()
    @Email()
    public emailAddress;
}
