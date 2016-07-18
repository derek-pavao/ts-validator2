"use strict";
var min_validator_1 = require("../validators/min-validator");
var validator_factory_1 = require("../utils/validator-factory");
/**
 * identifies the property it decorates as having a minimum value of config.min.
 * will treat '7' as 7 for validation purposes
 *
 * @param config configuration with min and message properties
 * @returns {function(any, string): undefined}
 */
exports.Min = function (config) {
    return validator_factory_1.validatorFactory(new min_validator_1.MinValidator(config));
};
//# sourceMappingURL=min.js.map