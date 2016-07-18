"use strict";
var not_empty_validator_1 = require("../validators/not-empty-validator");
var validator_factory_1 = require("../utils/validator-factory");
var integer_validator_1 = require("../validators/integer-validator");
var min_length_validator_1 = require("../validators/min-length-validator");
var max_length_validator_1 = require("../validators/max-length-validator");
var allowed_values_validator_1 = require("../validators/allowed-values-validator");
var pattern_validator_1 = require("../validators/pattern-validator");
var min_validator_1 = require("../validators/min-validator");
var max_validator_1 = require("../validators/max-validator");
var _ = require('lodash');
exports.attachStaticValidators = function (obj, swaggerDef) {
    _.forEach(obj._properties, function (propertyName) {
        var propDef = swaggerDef.properties[propertyName];
        if (typeof propDef === 'undefined') {
            return;
        }
        if (_.includes(swaggerDef.required, propertyName)) {
            validator_factory_1.validatorFactory(new not_empty_validator_1.NotEmptyValidator())(obj, propertyName);
        }
        if ((propDef.type === 'integer' ||
            propDef.type === 'number') &&
            typeof propDef.enum === 'undefined' && !alreadyHasValidator(obj, propertyName, integer_validator_1.IntegerValidator)) {
            validator_factory_1.validatorFactory(new integer_validator_1.IntegerValidator())(obj, propertyName);
        }
        if (typeof propDef.minLength !== 'undefined' && !alreadyHasValidator(obj, propertyName, min_length_validator_1.MinLengthValidator)) {
            validator_factory_1.validatorFactory(new min_length_validator_1.MinLengthValidator({ minLength: propDef.minLength }))(obj, propertyName);
        }
        if (typeof propDef.maxLength !== 'undefined' && !alreadyHasValidator(obj, propertyName, max_length_validator_1.MaxLengthValidator)) {
            validator_factory_1.validatorFactory(new max_length_validator_1.MaxLengthValidator({ maxLength: propDef.maxLength }))(obj, propertyName);
        }
        if (typeof propDef.enum !== 'undefined' && !alreadyHasValidator(obj, propertyName, allowed_values_validator_1.AllowedValuesValidator)) {
            validator_factory_1.validatorFactory(new allowed_values_validator_1.AllowedValuesValidator({ values: propDef.enum }))(obj, propertyName);
        }
        if (typeof propDef.pattern !== 'undefined' && !alreadyHasValidator(obj, propertyName, pattern_validator_1.PatternValidator)) {
            validator_factory_1.validatorFactory(new pattern_validator_1.PatternValidator({ pattern: propDef.pattern }))(obj, propertyName);
        }
        if (typeof propDef.minimum !== 'undefined' && !alreadyHasValidator(obj, propertyName, min_validator_1.MinValidator)) {
            validator_factory_1.validatorFactory(new min_validator_1.MinValidator({ min: propDef.minimum }))(obj, propertyName);
        }
        if (typeof propDef.maximum !== 'undefined' && !alreadyHasValidator(obj, propertyName, max_validator_1.MaxValidator)) {
            validator_factory_1.validatorFactory(new max_validator_1.MaxValidator({ max: propDef.maximum }))(obj, propertyName);
        }
    });
};
/**
 * Decorator function
 */
exports.SwaggerDef = function (swaggerDef, fullSwaggerDef) {
    return function (target) {
        if (!_.isEqual(_.keys(swaggerDef.properties).sort(), getSortedServerProperties(target))) {
            console.error('Swagger definition', swaggerDef);
            console.error('Model Properties', target.prototype._properties);
            throw new Error(target.name + ' Properties did not match properties in the Swagger definition');
        }
        exports.attachStaticValidators(target.prototype, swaggerDef);
        if (swaggerDef.discriminator) {
            target.prototype._discriminator = swaggerDef.discriminator;
            attachDynamicValidator(target, swaggerDef.discriminator, swaggerDef, fullSwaggerDef);
        }
    };
};
function getSortedServerProperties(target) {
    var ret = [];
    for (var i = 0; i < target.prototype._properties.length; i++) {
        var prop = target.prototype._properties[i];
        if (!target.prototype._ignoreProperties || !target.prototype._ignoreProperties[prop]) {
            ret.push(prop);
        }
    }
    return ret.sort();
}
function attachDynamicValidator(target, discriminator, swaggerDef, fullSwaggerDef) {
    /**
     * TODO(derek): Make this work if the model already implements
     * a setter/getter for this property
     */
    var newConstructor = function () {
        Object.defineProperty(this, discriminator, {
            get: function () {
                return this['_' + discriminator];
            },
            set: function (newValue) {
                if (this['_' + discriminator] !== newValue) {
                    this.updateValidatorsOnDiscriminatorChange(newValue, swaggerDef, fullSwaggerDef);
                    this['_' + discriminator] = newValue;
                }
            }
        });
        target.prototype.constructor.apply(this, arguments);
    };
    newConstructor.prototype = target.prototype;
    return newConstructor;
}
;
/**
 * TODO(derek): Consider re-implementing storing validators in a map instead of an array to make this
 * loop go away
 */
function alreadyHasValidator(obj, propertyName, validator) {
    if (typeof obj._validators === 'undefined' || typeof obj._validators[propertyName] === 'undefined') {
        return false;
    }
    else {
        for (var i = 0; i < obj._validators[propertyName].length; i++) {
            var existingValidator = obj._validators[propertyName][i];
            if (existingValidator instanceof validator) {
                return true;
            }
        }
    }
    return false;
}
//# sourceMappingURL=swagger-def.js.map