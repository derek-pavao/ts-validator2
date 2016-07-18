import { IEmailConfig } from "../interfaces/i-email-config";
import { IValidatorObject } from "../interfaces/i-validator-object";
export declare class EmailValidator implements IValidatorObject {
    name: string;
    defaultMessage: string;
    config: IEmailConfig;
    private emailPattern;
    private flags;
    constructor(config: IEmailConfig);
    validate(propertyValue: any): boolean;
}
