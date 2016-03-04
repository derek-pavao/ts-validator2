import * as chai from 'chai';
import {BaseModel} from './base-model';
import {ModelProp} from "../decorators/model-prop";
import {NotEmpty} from "../decorators/not-empty";

const expect = chai.expect;

describe('TestModel', function () {

    beforeEach(function () {
        this.testModel = new TestModel({firstName: 'Derek'});
    });

    it ('should have a firstName property set to Derek', function () {
        expect(this.testModel.firstName).to.equal('Derek');
    });

    it ('should not have a lastName property set', function () {
        expect(this.testModel.lastName).to.be.undefined;
    });

    describe('getErrors()', function () {

        it ('should return an object if there were validation issues', function () {
            expect(this.testModel.getErrors()).to.not.be.undefined;
        });

        it ('should return null if there are no validation issues', function () {
            this.testModel.lastName = 'Pavao';
            expect(this.testModel.getErrors()).to.be.null;
        });
    });
});

class TestModel extends BaseModel {

    @ModelProp()
    @NotEmpty()
    public firstName: string;

    @ModelProp()
    @NotEmpty()
    public lastName: string;
}
