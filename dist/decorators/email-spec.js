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
var email_1 = require("./email");
var expect = chai.expect;
describe('@Email()', function () {
    beforeEach(function () {
        this.testModel = new TestModel();
    });
    it('should return errors for an email such as derek@derekpavao.com as valid', function () {
        this.testModel.emailAddress = 'derek@derekpavao.com';
        var errors = this.testModel.getErrors();
        expect(errors).to.be.null;
    });
    it('should return errors for an email such as d@p.c as invalid', function () {
        this.testModel.emailAddress = 'd@p.c';
        var errors = this.testModel.getErrors();
        expect(errors.emailAddress).to.be.instanceOf(Array);
    });
    it('should return errors for an email such as Derp@@@@.com', function () {
        this.testModel.emailAddress = 'Derp@@@@.com';
        var errors = this.testModel.getErrors();
        expect(errors.emailAddress).to.be.instanceOf(Array);
    });
});
var TestModel = (function (_super) {
    __extends(TestModel, _super);
    function TestModel() {
        _super.apply(this, arguments);
    }
    __decorate([
        model_prop_1.ModelProp(),
        email_1.Email(), 
        __metadata('design:type', Object)
    ], TestModel.prototype, "emailAddress", void 0);
    return TestModel;
}(base_model_1.BaseModel));
//# sourceMappingURL=email-spec.js.map