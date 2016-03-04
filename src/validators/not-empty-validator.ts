import {IValidatorObject} from "../interfaces/i-validator-object";
import {IConfig} from "../interfaces/i-config";
import * as _ from 'lodash';

export class NotEmptyValidator implements IValidatorObject {

    public name: string;
    public defaultMessage: string;

    constructor(public config: IConfig = {message: ''}) {
        this.name = 'notEmpty';
        this.defaultMessage = '{{propertyName}} cannot be empty';
    }


    public validate(modelValue): boolean {
        if (_.isString(modelValue)) {
            return !_.isEmpty(modelValue.trim());
        } else if (_.isNumber(modelValue)) {
            return true;
        } else if (_.isBoolean(modelValue)) {
            return true;
        } else {
            return !_.isEmpty(modelValue);
        }
    }
}
