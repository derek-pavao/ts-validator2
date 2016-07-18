"use strict";
var _ = require('lodash');
var PatternValidator = (function () {
    function PatternValidator(config) {
        this.name = 'pattern';
        this.defaultMessage = '{{propertyName}} is not in the correct format';
        this.config = config;
    }
    PatternValidator.prototype.validate = function (propertyValue) {
        if (typeof propertyValue !== 'number' && _.isEmpty(propertyValue)) {
            return true;
        }
        if (typeof propertyValue === 'string') {
            return propertyValue.match(this.config.pattern) !== null;
        }
        else {
            return true;
        }
    };
    return PatternValidator;
}());
exports.PatternValidator = PatternValidator;
//# sourceMappingURL=pattern-validator.js.map