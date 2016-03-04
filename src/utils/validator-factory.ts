import {IValidatorObject} from "../interfaces/i-validator-object";
import * as _ from 'lodash';
import {BaseModel} from "../models/base-model";

let defaultMessageFactory = function (fieldName: string, validatorObject: IValidatorObject): string {
    let regex = new RegExp('([A-Z])', 'g');
    let displayFieldName = fieldName.replace(regex, function (match) {
        return ' ' + match;
    });

    displayFieldName = displayFieldName.charAt(0).toUpperCase() + displayFieldName.slice(1);

    return  validatorObject.defaultMessage.replace(/\{\{propertyName\}\}/g, displayFieldName);
};

export let validatorFactory = function (validatorObject: IValidatorObject) {
    return function (target, name: string) {
        if (name.indexOf('_') === 0 && Object.getOwnPropertyDescriptor(target, name.slice(1))) {
            name = name.slice(1);
        }

        let validatorMessage;
        if (!_.isUndefined(target._propNameForErrors) && !_.isUndefined(target._propNameForErrors[name])) {
            validatorMessage = (validatorObject.config && validatorObject.config.message) ? validatorObject.config.message : defaultMessageFactory(target._propNameForErrors[name], validatorObject);
        } else {
            validatorMessage = (validatorObject.config && validatorObject.config.message) ? validatorObject.config.message : defaultMessageFactory(name, validatorObject);
        }

        if (target instanceof BaseModel) {
            target._validators = target._validators || {};
            target._errorMessages = target._errorMessages || {};
            target._validators[name] = target._validators[name] || [];
            target._errorMessages[name] = target._errorMessages[name] || {};

            target._errorMessages[name][validatorObject.name] = validatorMessage;
            target._validators[name].push(validatorObject);
        }
    }
}
