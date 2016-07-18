"use strict";
var _ = require('lodash');
var swagger_def_1 = require("../decorators/swagger-def");
var BaseModel = (function () {
    function BaseModel(json) {
        var _this = this;
        json = json || {};
        _.forEach(this._properties, function (propertyName) { return _this[propertyName] = json[propertyName]; });
    }
    BaseModel.prototype.toJSON = function () {
        var _this = this;
        var obj = {};
        _.forEach(this._properties, function (propertyName) {
            if (_.isUndefined(_this._ignoreProperties[propertyName])) {
                obj[propertyName] = _this[propertyName];
            }
        });
        return obj;
    };
    BaseModel.prototype.getErrors = function (propertyName) {
        var errorMap = (propertyName) ? this._validateSingleProperty(propertyName) : this._validateAllProperties();
        return _.isEmpty(errorMap) ? null : errorMap;
    };
    BaseModel.prototype.updateValidatorsOnDiscriminatorChange = function (discriminatorValue, swaggerDef, fullSwaggerDef) {
        var allOf = fullSwaggerDef.api.definitions[discriminatorValue].allOf;
        this._validators = {};
        var newSwaggerDef = _.merge.apply(this, [{}].concat(allOf));
        swagger_def_1.attachStaticValidators(this, newSwaggerDef);
    };
    /**
     * this.getErrors delegates to this method if propertyName was present
     * @param propertyName the property in this model to getErrors
     * @returns {{}} an object of error messages, keys are property names, values are an array of strings/messages
     * @private
     */
    BaseModel.prototype._validateSingleProperty = function (propertyName) {
        var errorMap = {};
        if (this._validators.hasOwnProperty(propertyName)) {
            var errors = this._runValidatorsForProperty(propertyName);
            if (errors !== null) {
                errorMap[propertyName] = errors;
            }
        }
        return errorMap;
    };
    /**
     * this.getErrors delegates to this method if propertyName was NOT present
     * @returns {{}} an object of error messages, keys are property names, values are an array of strings/messages
     * @private
     */
    BaseModel.prototype._validateAllProperties = function () {
        var _this = this;
        var errorMap = {};
        _.forEach(this._properties, function (propertyName) {
            var errors = _this._runValidatorsForProperty(propertyName);
            if (errors !== null) {
                errorMap[propertyName] = errors;
            }
        });
        return errorMap;
    };
    /**
     * runs all validators for propertyName stored in _validators
     * @param propertyName the property to run the validators for
     * @returns {[] | null}
     * @private
     */
    BaseModel.prototype._runValidatorsForProperty = function (propertyName) {
        var _this = this;
        var value = this[propertyName];
        var errors = [];
        if (typeof this._validators[propertyName] !== 'undefined') {
            _.forEach(this._validators[propertyName], function (validator) {
                validator.model = _this;
                if (!validator.validate(value)) {
                    errors.push(_this._errorMessages[propertyName][validator.name]);
                }
            });
        }
        if (_.isEmpty(errors)) {
            return null;
        }
        else {
            return errors;
        }
    };
    return BaseModel;
}());
exports.BaseModel = BaseModel;
//# sourceMappingURL=base-model.js.map