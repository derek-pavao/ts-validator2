import { IValidatorObject } from "../interfaces/i-validator-object";
import { IConfig } from "../interfaces/i-config";
export declare class NotEmptyValidator implements IValidatorObject {
    config: IConfig;
    name: string;
    defaultMessage: string;
    constructor(config?: IConfig);
    validate(modelValue: any): boolean;
}
