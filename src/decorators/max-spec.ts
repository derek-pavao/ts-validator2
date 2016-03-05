import {BaseModel} from "../models/base-model";
import * as chai from 'chai';
import {ModelProp} from "./model-prop";
import {Max} from "./max";

const expect = chai.expect;

describe('@Max()', function () {
    beforeEach(function () {
        this.testModel = new TestModel();
    });

    it ('should return an error if the config.max is exceeded', function () {
        this.testModel.age = 31;
        let errors = this.testModel.getErrors();

        expect(errors.age).to.be.instanceOf(Array);
    });

    it ('should NOT return an error if the value is the same as config.max', function () {
        this.testModel.age = 30;
        let errors = this.testModel.getErrors();

        expect(errors).to.be.null;
    });

    it ('should not return an error if the value is less than config.max', function () {
        this.testModel.age = 28;
        let errors = this.testModel.getErrors();

        expect(errors).to.be.null;
    });

    it ('should treat string values as numbers for the purpose of validation', function () {
        this.testModel.age = '31';
        let errors = this.testModel.getErrors();
        expect(errors.age).to.be.instanceOf(Array);
    });
});

class TestModel extends BaseModel {

    @ModelProp()
    public firstName: string;

    @ModelProp()
    @Max({max: 30})
    public age: number;
}
