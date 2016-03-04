import {IConfig} from "../interfaces/i-config";
import {IValidatorObject} from "../interfaces/i-validator-object";
import * as _ from 'lodash';


export class FloatValidator implements IValidatorObject {
    public name: string = 'float';
    public defaultMessage: string;
    public config: IConfig;

    constructor(config: IConfig = {message: ''}) {
        this.config = config;
        this.defaultMessage = '{{propertyName}} must be a number';
    }

    public validate(modelValue): boolean {
        if (typeof modelValue === 'number' || _.isEmpty(modelValue)) {
            return true;
        }
        return !isNaN(parseFloat(modelValue));
    }
}
