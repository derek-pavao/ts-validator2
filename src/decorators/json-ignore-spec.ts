import {BaseModel} from "../models/base-model";
import * as chai from 'chai';
import {ModelProp} from "./model-prop";
import {JsonIgnore} from "./json-ignore";
const expect = chai.expect;



describe('@JsonIgnore()', function () {
    beforeEach(function () {
        console.log('JsonIgnore', JsonIgnore);
        this.testModel = new TestModel({
            dontSerializeMe: 'derp',
            firstName: 'Derek',
            isCool: 'not',
            lastName: 'Pavao'
        });
    });

    it ('should not include the isCool property in the serialized object', function () {
        let obj = JSON.parse(JSON.stringify(this.testModel));
        console.log('obj', obj);

        expect(obj.isCool).to.be.undefined;
        // expect(obj).to.not.contain.all.keys(['isCool']);
        // expect(obj).to.contain.all.keys(['firstName', 'lastName']);
    });


});

class TestModel extends BaseModel {

    @ModelProp()
    public firstName: string;

    @ModelProp()
    public lastName: string;

    @ModelProp()
    @JsonIgnore()
    public isCool: string;

    public dontSerializeMe: string;

    constructor(json?) {
        super(json);
    }
}
