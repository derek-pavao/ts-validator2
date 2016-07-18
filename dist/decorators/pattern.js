"use strict";
var pattern_validator_1 = require("../validators/pattern-validator");
var validator_factory_1 = require("../utils/validator-factory");
exports.Pattern = function (config) {
    return validator_factory_1.validatorFactory(new pattern_validator_1.PatternValidator(config));
};
//# sourceMappingURL=pattern.js.map