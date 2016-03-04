import * as _ from 'lodash';
import {IConfig} from "../interfaces/i-config";
import {IValidatorObject} from "../interfaces/i-validator-object";


export class IntegerValidator implements IValidatorObject {
    public name: string = 'integer';
    public defaultMessage: string;
    public config: IConfig;

    constructor(config: IConfig = {message: ''}) {
        this.config = config;
        this.defaultMessage = '{{propertyName}} must be a whole number, decimals are not accepted';
    }

    public validate(modelValue): boolean {

        if (!_.isNumber(modelValue) && _.isEmpty(modelValue)) {
            return true;
        }
        return _.isInteger(Number(modelValue));
    }
}
