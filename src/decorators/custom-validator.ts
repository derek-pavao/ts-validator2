import {CustomValidatorValidator} from "../validators/custom-validator-validator";
import {validatorFactory} from "../utils/validator-factory";
import {ICustomValidatorConfig} from "../interfaces/i-custom-validator-config";

export let CustomValidator = function (config: ICustomValidatorConfig) {
    return validatorFactory(new CustomValidatorValidator(config));
};
