import { IValidatorObject } from "../interfaces/i-validator-object";
import { IMaxLengthConfig } from "../interfaces/i-max-length-config";
export declare class MaxLengthValidator implements IValidatorObject {
    name: string;
    defaultMessage: string;
    config: IMaxLengthConfig;
    constructor(config: IMaxLengthConfig);
    validate(modelValue: string): boolean;
}
