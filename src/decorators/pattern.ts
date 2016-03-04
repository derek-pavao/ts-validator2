import {PatternValidator} from "../validators/pattern-validator";
import {validatorFactory} from "../utils/validator-factory";
import {IPatternConfig} from "../interfaces/i-pattern-config";

export let Pattern = function (config: IPatternConfig) {
    return validatorFactory(new PatternValidator(config));
};
