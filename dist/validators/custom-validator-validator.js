"use strict";
var CustomValidatorValidator = (function () {
    function CustomValidatorValidator(config) {
        this.name = 'email';
        this.defaultMessage = '{{propertyName}} is invalid';
        this.config = config;
    }
    CustomValidatorValidator.prototype.validate = function (propertyValue) {
        return this.config.validator.apply(this.model, arguments);
    };
    return CustomValidatorValidator;
}());
exports.CustomValidatorValidator = CustomValidatorValidator;
//# sourceMappingURL=custom-validator-validator.js.map