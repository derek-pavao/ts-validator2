import { IPatternConfig } from "../interfaces/i-pattern-config";
import { IValidatorObject } from "../interfaces/i-validator-object";
export declare class PatternValidator implements IValidatorObject {
    name: string;
    defaultMessage: string;
    config: IPatternConfig;
    constructor(config: IPatternConfig);
    validate(propertyValue: any): boolean;
}
