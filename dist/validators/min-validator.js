"use strict";
var _ = require('lodash');
var MinValidator = (function () {
    function MinValidator(config) {
        this.name = 'min';
        this.config = config;
        if (config.hasOwnProperty('name')) {
            this.name = config.name;
        }
        this.defaultMessage = "{{propertyName}} must be at least " + this.config.min;
    }
    MinValidator.prototype.validate = function (modelValue) {
        if (typeof modelValue !== 'number' && _.isEmpty(modelValue)) {
            return true;
        }
        var num = Number(modelValue);
        if (_.isNaN(num) || !_.isNumber(num)) {
            // throw new Error('the min validator requires that the model value can be parsed into a number');
            return false;
        }
        else {
            return num >= this.config.min;
        }
    };
    return MinValidator;
}());
exports.MinValidator = MinValidator;
//# sourceMappingURL=min-validator.js.map