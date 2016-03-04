
import {validatorFactory} from "../utils/validator-factory";
import {NotEmptyValidator} from "../validators/not-empty-validator";
/**
 * identifies the property it decorates as not allowed to be empty, essentially required.
 * "empty" is defined as undefined, null, {}, [], '', ' ';
 *
 * @param errorMessage the message to display if the validation fails
 * @returns {function(Object, string): undefined}
 */
 export let NotEmpty = function (errorMessage?) {

    return validatorFactory(new NotEmptyValidator({message: errorMessage}));
 };
