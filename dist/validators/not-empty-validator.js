"use strict";
var _ = require('lodash');
var NotEmptyValidator = (function () {
    function NotEmptyValidator(config) {
        if (config === void 0) { config = { message: '' }; }
        this.config = config;
        this.name = 'notEmpty';
        this.defaultMessage = '{{propertyName}} cannot be empty';
    }
    NotEmptyValidator.prototype.validate = function (modelValue) {
        if (_.isString(modelValue)) {
            return !_.isEmpty(modelValue.trim());
        }
        else if (_.isNumber(modelValue)) {
            return true;
        }
        else if (_.isBoolean(modelValue)) {
            return true;
        }
        else {
            return !_.isEmpty(modelValue);
        }
    };
    return NotEmptyValidator;
}());
exports.NotEmptyValidator = NotEmptyValidator;
//# sourceMappingURL=not-empty-validator.js.map