"use strict";
var min_length_validator_1 = require("../validators/min-length-validator");
var validator_factory_1 = require("../utils/validator-factory");
exports.MinLength = function (config) {
    return validator_factory_1.validatorFactory(new min_length_validator_1.MinLengthValidator(config));
};
//# sourceMappingURL=min-length.js.map