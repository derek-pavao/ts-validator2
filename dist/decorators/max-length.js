"use strict";
var max_length_validator_1 = require("../validators/max-length-validator");
var validator_factory_1 = require("../utils/validator-factory");
exports.MaxLength = function (config) {
    return validator_factory_1.validatorFactory(new max_length_validator_1.MaxLengthValidator(config));
};
//# sourceMappingURL=max-length.js.map