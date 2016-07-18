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
var chai = require('chai');
var base_model_1 = require('./base-model');
var model_prop_1 = require("../decorators/model-prop");
var not_empty_1 = require("../decorators/not-empty");
var expect = chai.expect;
describe('TestModel', function () {
    beforeEach(function () {
        this.testModel = new TestModel({ firstName: 'Derek' });
    });
    it('should have a firstName property set to Derek', function () {
        expect(this.testModel.firstName).to.equal('Derek');
    });
    it('should not have a lastName property set', function () {
        expect(this.testModel.lastName).to.be.undefined;
    });
    describe('getErrors()', function () {
        it('should return an object if there were validation issues', function () {
            expect(this.testModel.getErrors()).to.not.be.undefined;
        });
        it('should return null if there are no validation issues', function () {
            this.testModel.lastName = 'Pavao';
            expect(this.testModel.getErrors()).to.be.null;
        });
    });
});
var TestModel = (function (_super) {
    __extends(TestModel, _super);
    function TestModel() {
        _super.apply(this, arguments);
    }
    __decorate([
        model_prop_1.ModelProp(),
        not_empty_1.NotEmpty(), 
        __metadata('design:type', String)
    ], TestModel.prototype, "firstName", void 0);
    __decorate([
        model_prop_1.ModelProp(),
        not_empty_1.NotEmpty(), 
        __metadata('design:type', String)
    ], TestModel.prototype, "lastName", void 0);
    return TestModel;
}(base_model_1.BaseModel));
//# sourceMappingURL=base-model-spec.js.map