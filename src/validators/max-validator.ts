import {IMaxConfig} from "../interfaces/i-max-config";
import {IValidatorObject} from "../interfaces/i-validator-object";

export class MaxValidator implements IValidatorObject {
    public name = 'max';
    public defaultMessage: string;
    public config: IMaxConfig;

    constructor(config: IMaxConfig) {
        this.config = config;

        if (config.hasOwnProperty('name')) {
            this.name = config.name;
        }

        this.defaultMessage = `{{propertyName}} must be at most ${this.config.max}`;
    }

    public validate(modelValue): boolean {
        if (typeof modelValue !== 'number' && _.isEmpty(modelValue)) {
            return true;
        }

        const num = Number(modelValue);

        if (_.isNaN(num) || !_.isNumber(num)) {
            console.log('num', num);
            // throw new Error('the max validator requires that the model value can be parsed into a number');
            return false;
        } else {
            return num <= this.config.max;
        }
    }
}
