"use strict";
var EmailValidator = (function () {
    function EmailValidator(config) {
        this.name = 'email';
        this.defaultMessage = '{{propertyName}} must be a valid email format';
        this.config = config;
        this.flags = this.config.flags || 'i';
        this.emailPattern = this.config.pattern || new RegExp('^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$', this.flags);
    }
    EmailValidator.prototype.validate = function (propertyValue) {
        if (typeof propertyValue === 'string') {
            return propertyValue.match(this.emailPattern) !== null;
        }
        else {
            return true;
        }
    };
    return EmailValidator;
}());
exports.EmailValidator = EmailValidator;
//# sourceMappingURL=email-validator.js.map