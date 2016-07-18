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
var chai = require('chai');
var model_prop_1 = require("./model-prop");
var allowed_values_1 = require("./allowed-values");
var expect = chai.expect;
describe('@AllowedValues()', function () {
    beforeEach(function () {
        this.testModel = new TestModel();
    });
    it('should only mark values that are in the allowedValues array as valid values', function () {
        this.testModel.isCool = 'YES';
        var errors = this.testModel.getErrors();
        expect(errors).to.be.null;
    });
    it('should mark values that are not in the allowedValues array as invalid', function () {
        this.testModel.isCool = 'HELL YEAH';
        var errors = this.testModel.getErrors();
        expect(errors.isCool).to.be.instanceOf(Array);
    });
    it('should treat strings in config.values as case sensitive', function () {
        this.testModel.isCool = 'yes';
        var errors = this.testModel.getErrors();
        expect(errors.isCool).to.be.instanceOf(Array);
    });
});
var TestModel = (function (_super) {
    __extends(TestModel, _super);
    function TestModel() {
        _super.apply(this, arguments);
    }
    __decorate([
        model_prop_1.ModelProp(),
        allowed_values_1.AllowedValues({
            values: ['YES', 'NO']
        }), 
        __metadata('design:type', String)
    ], TestModel.prototype, "isCool", void 0);
    return TestModel;
}(base_model_1.BaseModel));
//# sourceMappingURL=allowed-values-spec.js.map