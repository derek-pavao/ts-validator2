"use strict";
var max_validator_1 = require("../validators/max-validator");
var validator_factory_1 = require("../utils/validator-factory");
exports.Max = function (config) {
    return validator_factory_1.validatorFactory(new max_validator_1.MaxValidator(config));
};
//# sourceMappingURL=max.js.map