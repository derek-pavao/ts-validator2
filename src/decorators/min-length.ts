import {MinLengthValidator} from "../validators/min-length-validator";
import {validatorFactory} from "../utils/validator-factory";
import {IMinLengthConfig} from "../interfaces/i-min-length-config";


export let MinLength = function (config: IMinLengthConfig) {

    return validatorFactory(new MinLengthValidator(config));
};
