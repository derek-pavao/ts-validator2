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
var json_ignore_1 = require("./json-ignore");
var expect = chai.expect;
describe('@JsonIgnore()', function () {
    beforeEach(function () {
        this.testModel = new TestModel({
            dontSerializeMe: 'derp',
            firstName: 'Derek',
            isCool: 'not',
            lastName: 'Pavao'
        });
    });
    it('should not include the isCool property in the serialized object', function () {
        var obj = JSON.parse(JSON.stringify(this.testModel));
        expect(obj).to.not.contain.any.keys(['isCool', 'dontSerializeMe']);
        expect(obj).to.contain.all.keys(['firstName', 'lastName']);
    });
});
var TestModel = (function (_super) {
    __extends(TestModel, _super);
    function TestModel(json) {
        _super.call(this, json);
    }
    __decorate([
        model_prop_1.ModelProp(), 
        __metadata('design:type', String)
    ], TestModel.prototype, "firstName", void 0);
    __decorate([
        model_prop_1.ModelProp(), 
        __metadata('design:type', String)
    ], TestModel.prototype, "lastName", void 0);
    __decorate([
        model_prop_1.ModelProp(),
        json_ignore_1.JsonIgnore(), 
        __metadata('design:type', String)
    ], TestModel.prototype, "isCool", void 0);
    return TestModel;
}(base_model_1.BaseModel));
//# sourceMappingURL=json-ignore-spec.js.map