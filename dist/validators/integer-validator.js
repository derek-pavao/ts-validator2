"use strict";
var _ = require('lodash');
var IntegerValidator = (function () {
    function IntegerValidator(config) {
        if (config === void 0) { config = { message: '' }; }
        this.name = 'integer';
        this.config = config;
        this.defaultMessage = '{{propertyName}} must be a whole number, decimals are not accepted';
    }
    IntegerValidator.prototype.validate = function (modelValue) {
        if (!_.isNumber(modelValue) && _.isEmpty(modelValue)) {
            return true;
        }
        return _.isInteger(Number(modelValue));
    };
    return IntegerValidator;
}());
exports.IntegerValidator = IntegerValidator;
//# sourceMappingURL=integer-validator.js.map