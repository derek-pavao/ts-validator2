"use strict";
var _ = require('lodash');
var MinLengthValidator = (function () {
    function MinLengthValidator(config) {
        this.name = 'minLength';
        this.config = config;
        this.defaultMessage = "{{propertyName}} length must be at least " + this.config.minLength;
    }
    MinLengthValidator.prototype.validate = function (modelValue) {
        if (_.isEmpty(modelValue)) {
            return true;
        }
        return modelValue.length >= this.config.minLength;
    };
    return MinLengthValidator;
}());
exports.MinLengthValidator = MinLengthValidator;
//# sourceMappingURL=min-length-validator.js.map