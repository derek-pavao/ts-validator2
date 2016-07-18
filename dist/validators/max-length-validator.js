"use strict";
var _ = require('lodash');
var MaxLengthValidator = (function () {
    function MaxLengthValidator(config) {
        this.name = 'maxLength';
        this.config = config;
        this.defaultMessage = "{{propertyName}} length must be at most " + this.config.maxLength;
    }
    MaxLengthValidator.prototype.validate = function (modelValue) {
        if (_.isEmpty(modelValue)) {
            return true;
        }
        return modelValue.length <= this.config.maxLength;
    };
    return MaxLengthValidator;
}());
exports.MaxLengthValidator = MaxLengthValidator;
//# sourceMappingURL=max-length-validator.js.map