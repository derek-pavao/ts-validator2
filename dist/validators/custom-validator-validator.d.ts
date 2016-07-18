import { ICustomValidatorConfig } from "../interfaces/i-custom-validator-config";
import { IValidatorObject } from "../interfaces/i-validator-object";
export declare class CustomValidatorValidator implements IValidatorObject {
    name: string;
    defaultMessage: string;
    config: ICustomValidatorConfig;
    model: any;
    constructor(config: ICustomValidatorConfig);
    validate(propertyValue: any): any;
}
