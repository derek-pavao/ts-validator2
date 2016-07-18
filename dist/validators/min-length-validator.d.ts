import { IValidatorObject } from "../interfaces/i-validator-object";
import { IMinLengthConfig } from "../interfaces/i-min-length-config";
export declare class MinLengthValidator implements IValidatorObject {
    name: string;
    defaultMessage: string;
    config: IMinLengthConfig;
    constructor(config: IMinLengthConfig);
    validate(modelValue: string): boolean;
}
