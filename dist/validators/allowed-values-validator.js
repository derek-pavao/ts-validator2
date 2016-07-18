"use strict";
var _ = require('lodash');
var AllowedValuesValidator = (function () {
    function AllowedValuesValidator(config) {
        this.name = 'allowedValues';
        this.config = config;
        this.defaultMessage = "{{propertyName}} must be one of the following values, [" + this.config.values.join(', ') + "]";
    }
    AllowedValuesValidator.prototype.validate = function (modelValue) {
        if (_.isEmpty(modelValue)) {
            return true;
        }
        for (var i = 0; i < this.config.values.length; i++) {
            var currValue = this.config.values[i];
            if (typeof currValue === 'number') {
                modelValue = Number(modelValue);
            }
            if (currValue === modelValue) {
                return true;
            }
        }
        return false;
    };
    return AllowedValuesValidator;
}());
exports.AllowedValuesValidator = AllowedValuesValidator;
//# sourceMappingURL=allowed-values-validator.js.map