"use strict";
var allowed_values_validator_1 = require("../validators/allowed-values-validator");
var validator_factory_1 = require("../utils/validator-factory");
exports.AllowedValues = function (config) {
    return validator_factory_1.validatorFactory(new allowed_values_validator_1.AllowedValuesValidator(config));
};
//# sourceMappingURL=allowed-values.js.map