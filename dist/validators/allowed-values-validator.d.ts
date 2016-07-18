import { IValidatorObject } from "../interfaces/i-validator-object";
import { IAllowedValuesConfig } from "../interfaces/i-allowed-values-config";
export declare class AllowedValuesValidator implements IValidatorObject {
    name: string;
    defaultMessage: string;
    config: IAllowedValuesConfig;
    constructor(config: IAllowedValuesConfig);
    validate(modelValue: string | number): boolean;
}
