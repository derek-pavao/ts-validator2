import {BaseModel} from "../models/base-model";
import {ModelProp} from "./model-prop";
import * as chai from 'chai';
const expect = chai.expect;


describe('@ModelProp()', function () {

    beforeEach(function () {
        this.testModel = new TestModel({firstName: 'Derek'});
    });

    it ('should have an _properties array defined', function () {
        expect(this.testModel._properties).to.be.instanceOf(Array);
    });

    it ('should have firstName and lastName set as properties', function () {
        console.log('props', this.testModel._properties);
        expect(this.testModel._properties.indexOf('firstName')).to.not.equal(-1);
        expect(this.testModel._properties.indexOf('lastName')).to.not.equal(-1);
    });

    it ('should not use _ prefixes in the property array if that property has a getter setter', function () {
        expect(this.testModel._properties.indexOf('cool')).to.not.equal(-1);
        expect(this.testModel._properties.indexOf('_cool')).to.equal(-1);
    });

    it ('should NOT add middleName to the _properties array since it wasnt annotated with @ModelProp()', function () {
        expect(this.testModel._properties.indexOf('middleName')).to.equal(-1);
    });
});


class TestModel extends BaseModel {

    @ModelProp()
    public firstName: string;

    @ModelProp()
    public lastName: string;

    public middleName: string;

    public get cool() {
        return this._cool;
    }

    public set cool(val: boolean) {
        // you're not really cool
        this._cool = !val;
    }

    @ModelProp({hasGetterSetter: true})
    private _cool: boolean;


}
