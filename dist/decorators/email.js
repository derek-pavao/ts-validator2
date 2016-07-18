"use strict";
var email_validator_1 = require("../validators/email-validator");
var validator_factory_1 = require("../utils/validator-factory");
exports.Email = function (config) {
    if (config === void 0) { config = {}; }
    return validator_factory_1.validatorFactory(new email_validator_1.EmailValidator(config));
};
//# sourceMappingURL=email.js.map