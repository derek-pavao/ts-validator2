import {MaxValidator} from "../validators/max-validator";
import {validatorFactory} from "../utils/validator-factory";
import {IMaxConfig} from "../interfaces/i-max-config";

export let Max = function (config: IMaxConfig) {

    return validatorFactory(new MaxValidator(config));
};
