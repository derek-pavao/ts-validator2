import {MaxLengthValidator} from "../validators/max-length-validator";
import {validatorFactory} from "../utils/validator-factory";
import {IMaxLengthConfig} from "../interfaces/i-max-length-config";


export let MaxLength = function (config: IMaxLengthConfig) {

    return validatorFactory(new MaxLengthValidator(config));
};
