import {ICustomValidatorConfig} from "../interfaces/i-custom-validator-config";
import {IValidatorObject} from "../interfaces/i-validator-object";


export class CustomValidatorValidator implements IValidatorObject {
    public name: string = 'email';
    public defaultMessage: string = '{{propertyName}} is invalid';
    public config: ICustomValidatorConfig;
    public model: any;

    constructor(config: ICustomValidatorConfig) {
        this.config = config;
    }

    public validate(propertyValue: any) {
        return this.config.validator.apply(this.model, arguments);
    }

}
