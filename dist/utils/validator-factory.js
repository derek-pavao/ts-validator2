"use strict";
var _ = require('lodash');
var base_model_1 = require("../models/base-model");
var defaultMessageFactory = function (fieldName, validatorObject) {
    var regex = new RegExp('([A-Z])', 'g');
    var displayFieldName = fieldName.replace(regex, function (match) {
        return ' ' + match;
    });
    displayFieldName = displayFieldName.charAt(0).toUpperCase() + displayFieldName.slice(1);
    return validatorObject.defaultMessage.replace(/\{\{propertyName\}\}/g, displayFieldName);
};
exports.validatorFactory = function (validatorObject) {
    return function (target, name) {
        if (name.indexOf('_') === 0 && Object.getOwnPropertyDescriptor(target, name.slice(1))) {
            name = name.slice(1);
        }
        var validatorMessage;
        if (hasMessage(validatorObject)) {
            validatorMessage = validatorObject.config.message;
        }
        else {
            validatorMessage = defaultMessageFactory(getPropNameForErrors(target, name), validatorObject);
        }
        if (target instanceof base_model_1.BaseModel) {
            target._validators = target._validators || {};
            target._errorMessages = target._errorMessages || {};
            target._validators[name] = target._validators[name] || [];
            target._errorMessages[name] = target._errorMessages[name] || {};
            target._errorMessages[name][validatorObject.name] = validatorMessage;
            target._validators[name].push(validatorObject);
        }
    };
};
function hasMessage(validatorObj) {
    return !_.isUndefined(validatorObj.config) && !_.isUndefined(validatorObj.config.message);
}
function getPropNameForErrors(target, name) {
    if (!_.isUndefined(target._propNameForErrors) && !_.isUndefined(target._propNameForErrors[name])) {
        return target._propNameForErrors[name];
    }
    else {
        return name;
    }
}
//# sourceMappingURL=validator-factory.js.map