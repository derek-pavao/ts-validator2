import * as _ from 'lodash';
import {IValidatorObject} from "../interfaces/i-validator-object";
import {IMinLengthConfig} from "../interfaces/i-min-length-config";

export class MinLengthValidator implements IValidatorObject {
    public name = 'minLength';
    public defaultMessage: string;
    public config: IMinLengthConfig;

    constructor(config: IMinLengthConfig) {
        this.config = config;
        this.defaultMessage = `{{propertyName}} length must be at least ${this.config.minLength}`;
    }

    public validate(modelValue: string): boolean {
        if (_.isEmpty(modelValue)) {
            return true;
        }

        return modelValue.length >= this.config.minLength;
    }
}
