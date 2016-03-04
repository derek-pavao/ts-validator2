import {IValidatorObject} from "../interfaces/i-validator-object";
import {IMaxLengthConfig} from "../interfaces/i-max-length-config";
import * as _ from 'lodash';


export class MaxLengthValidator implements IValidatorObject {
    public name = 'maxLength';
    public defaultMessage: string;
    public config: IMaxLengthConfig;

    constructor(config: IMaxLengthConfig) {
        this.config = config;
        this.defaultMessage = `{{propertyName}} length must be at most ${this.config.maxLength}`;
    }

    public validate(modelValue: string) {
        if (_.isEmpty(modelValue)) {
            return true;
        }

        return modelValue.length <= this.config.maxLength;
    }

}
