import { IMaxConfig } from "../interfaces/i-max-config";
import { IValidatorObject } from "../interfaces/i-validator-object";
export declare class MaxValidator implements IValidatorObject {
    name: string;
    defaultMessage: string;
    config: IMaxConfig;
    constructor(config: IMaxConfig);
    validate(modelValue: any): boolean;
}
