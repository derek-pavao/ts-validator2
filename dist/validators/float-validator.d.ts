import { IConfig } from "../interfaces/i-config";
import { IValidatorObject } from "../interfaces/i-validator-object";
export declare class FloatValidator implements IValidatorObject {
    name: string;
    defaultMessage: string;
    config: IConfig;
    constructor(config?: IConfig);
    validate(modelValue: any): boolean;
}
