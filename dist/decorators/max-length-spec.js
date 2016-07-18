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
var max_length_1 = require("./max-length");
var chai = require('chai');
var expect = chai.expect;
describe('@MaxLength()', function () {
    beforeEach(function () {
        this.testModel = new TestModel();
    });
    it('should return an error when config.maxLength is exceeded', function () {
        this.testModel.firstName = 'Derek Pavao';
        var errors = this.testModel.getErrors();
        expect(errors.firstName).to.be.instanceOf(Array);
    });
    it('should not return an error when config.maxLength is equal to length', function () {
        this.testModel.firstName = 'Derek';
        var errors = this.testModel.getErrors();
        expect(errors).to.be.null;
    });
    it('should not return an error when config.maxLength is NOT exceeded', function () {
        this.testModel.firstName = 'D';
        var errors = this.testModel.getErrors();
        expect(errors).to.be.null;
    });
});
var TestModel = (function (_super) {
    __extends(TestModel, _super);
    function TestModel() {
        _super.apply(this, arguments);
    }
    __decorate([
        model_prop_1.ModelProp(),
        max_length_1.MaxLength({ maxLength: 5 }), 
        __metadata('design:type', String)
    ], TestModel.prototype, "firstName", void 0);
    return TestModel;
}(base_model_1.BaseModel));
//# sourceMappingURL=max-length-spec.js.map