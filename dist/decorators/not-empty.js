"use strict";
var validator_factory_1 = require("../utils/validator-factory");
var not_empty_validator_1 = require("../validators/not-empty-validator");
/**
 * identifies the property it decorates as not allowed to be empty, essentially required.
 * "empty" is defined as undefined, null, {}, [], '', ' ';
 *
 * @param errorMessage the message to display if the validation fails
 * @returns {function(Object, string): undefined}
 */
exports.NotEmpty = function (errorMessage) {
    return validator_factory_1.validatorFactory(new not_empty_validator_1.NotEmptyValidator({ message: errorMessage }));
};
//# sourceMappingURL=not-empty.js.map