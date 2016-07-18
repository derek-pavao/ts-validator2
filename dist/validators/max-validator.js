"use strict";
var _ = require('lodash');
var MaxValidator = (function () {
    function MaxValidator(config) {
        this.name = 'max';
        this.config = config;
        if (config.hasOwnProperty('name')) {
            this.name = config.name;
        }
        this.defaultMessage = "{{propertyName}} must be at most " + this.config.max;
    }
    MaxValidator.prototype.validate = function (modelValue) {
        if (typeof modelValue !== 'number' && _.isEmpty(modelValue)) {
            return true;
        }
        var num = Number(modelValue);
        if (_.isNaN(num) || !_.isNumber(num)) {
            console.log('num', num);
            // throw new Error('the max validator requires that the model value can be parsed into a number');
            return false;
        }
        else {
            return num <= this.config.max;
        }
    };
    return MaxValidator;
}());
exports.MaxValidator = MaxValidator;
//# sourceMappingURL=max-validator.js.map