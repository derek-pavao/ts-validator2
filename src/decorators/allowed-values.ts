import {AllowedValuesValidator} from "../validators/allowed-values-validator";
import {validatorFactory} from "../utils/validator-factory";
import {IAllowedValuesConfig} from "../interfaces/i-allowed-values-config";


export let AllowedValues = function (config: IAllowedValuesConfig) {
    return validatorFactory(new AllowedValuesValidator(config));
};
