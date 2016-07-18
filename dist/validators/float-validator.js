"use strict";
var _ = require('lodash');
var FloatValidator = (function () {
    function FloatValidator(config) {
        if (config === void 0) { config = { message: '' }; }
        this.name = 'float';
        this.config = config;
        this.defaultMessage = '{{propertyName}} must be a number';
    }
    FloatValidator.prototype.validate = function (modelValue) {
        if (typeof modelValue === 'number' || _.isEmpty(modelValue)) {
            return true;
        }
        return !isNaN(parseFloat(modelValue));
    };
    return FloatValidator;
}());
exports.FloatValidator = FloatValidator;
//# sourceMappingURL=float-validator.js.map