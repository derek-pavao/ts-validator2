import {MinValidator} from "../validators/min-validator";
import {validatorFactory} from "../utils/validator-factory";
import {IMinConfig} from "../interfaces/i-min-config";

/**
 * identifies the property it decorates as having a minimum value of config.min.
 * will treat '7' as 7 for validation purposes
 *
 * @param config configuration with min and message properties
 * @returns {function(any, string): undefined}
 */
export let Min = function (config: IMinConfig) {

    return validatorFactory(new MinValidator(config));
};
