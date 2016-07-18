import { IValidatorObject } from "../interfaces/i-validator-object";
import { IMinConfig } from "../interfaces/i-min-config";
export declare class MinValidator implements IValidatorObject {
    name: string;
    defaultMessage: string;
    config: IMinConfig;
    constructor(config: IMinConfig);
    validate(modelValue: any): boolean;
}
