import {IValidatorObject} from "../interfaces/i-validator-object";
import {IMinConfig} from "../interfaces/i-min-config";
import * as _ from 'lodash';

export class MinValidator  implements IValidatorObject {

    public name = 'min';
    public defaultMessage: string;
    public config: IMinConfig;

    constructor(config: IMinConfig) {
        this.config = config;

        if (config.hasOwnProperty('name')) {
            this.name = config.name;
        }

        this.defaultMessage = `{{propertyName}} must be at least ${this.config.min}`;
    }

    public validate(modelValue): boolean {
        if (typeof modelValue !== 'number' && _.isEmpty(modelValue)) {
            return true;
        }

        const num = Number(modelValue);
        if (_.isNaN(num) || !_.isNumber(num)) {
            // throw new Error('the min validator requires that the model value can be parsed into a number');
            return false;
        } else {
            return num >= this.config.min;
        }
    }

}
