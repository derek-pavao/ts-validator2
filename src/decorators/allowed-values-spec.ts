import {BaseModel} from "../models/base-model";
import * as chai from 'chai';
import {ModelProp} from "./model-prop";
import {AllowedValues} from "./allowed-values";
const expect = chai.expect;

describe('@AllowedValues()', function () {
    beforeEach(function () {
        this.testModel = new TestModel();
    });

    it ('should only mark values that are in the allowedValues array as valid values', function () {
        this.testModel.isCool = 'YES';

        let errors = this.testModel.getErrors();

        expect(errors).to.be.null;
    });

    it ('should mark values that are not in the allowedValues array as invalid', function () {
        this.testModel.isCool = 'HELL YEAH';

        let errors = this.testModel.getErrors();
        expect(errors.isCool).to.be.instanceOf(Array);
    });

    it ('should treat strings in config.values as case sensitive', function () {
        this.testModel.isCool = 'yes';

        let errors = this.testModel.getErrors();
        expect(errors.isCool).to.be.instanceOf(Array);
    });
});

class TestModel extends BaseModel {

    @ModelProp()
    @AllowedValues({
        values: ['YES', 'NO']
    })
    public isCool: string;
}
