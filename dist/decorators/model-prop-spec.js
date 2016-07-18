"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var base_model_1 = require("../models/base-model");
var model_prop_1 = require("./model-prop");
var chai = require('chai');
var expect = chai.expect;
describe('@ModelProp()', function () {
    beforeEach(function () {
        this.testModel = new TestModel({ firstName: 'Derek' });
    });
    it('should have an _properties array defined', function () {
        expect(this.testModel._properties).to.be.instanceOf(Array);
    });
    it('should have firstName and lastName set as properties', function () {
        expect(this.testModel._properties.indexOf('firstName')).to.not.equal(-1);
        expect(this.testModel._properties.indexOf('lastName')).to.not.equal(-1);
    });
    it('should not use _ prefixes in the property array if that property has a getter setter', function () {
        expect(this.testModel._properties.indexOf('cool')).to.not.equal(-1);
        expect(this.testModel._properties.indexOf('_cool')).to.equal(-1);
    });
    it('should NOT add middleName to the _properties array since it wasnt annotated with @ModelProp()', function () {
        expect(this.testModel._properties.indexOf('middleName')).to.equal(-1);
    });
});
var TestModel = (function (_super) {
    __extends(TestModel, _super);
    function TestModel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(TestModel.prototype, "cool", {
        get: function () {
            return this._cool;
        },
        set: function (val) {
            // you're not really cool
            this._cool = !val;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        model_prop_1.ModelProp(), 
        __metadata('design:type', String)
    ], TestModel.prototype, "firstName", void 0);
    __decorate([
        model_prop_1.ModelProp(), 
        __metadata('design:type', String)
    ], TestModel.prototype, "lastName", void 0);
    __decorate([
        model_prop_1.ModelProp({ hasGetterSetter: true }), 
        __metadata('design:type', Boolean)
    ], TestModel.prototype, "_cool", void 0);
    return TestModel;
}(base_model_1.BaseModel));
//# sourceMappingURL=model-prop-spec.js.map