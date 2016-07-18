"use strict";
var custom_validator_validator_1 = require("../validators/custom-validator-validator");
var validator_factory_1 = require("../utils/validator-factory");
exports.CustomValidator = function (config) {
    return validator_factory_1.validatorFactory(new custom_validator_validator_1.CustomValidatorValidator(config));
};
//# sourceMappingURL=custom-validator.js.map