"use strict";
var _ = require('lodash');
/**
 * identifies the property it decorates as a model property of the class, target.
 * Since javascript objects are dynamic we must know what properties are to be set
 * on a model so we can validate even the ones that are still undefined
 */
exports.ModelProp = function (config) {
    return function (target, name) {
        target._properties = target._properties || [];
        target._propNameForErrors = target._propNameForErrors || {};
        if (_.isUndefined(config)) {
            target._properties.push(name);
        }
        else {
            if (config.hasGetterSetter === true && name[0] === '_') {
                target._properties.push(name.slice(1));
            }
            else {
                target._properties.push(name);
            }
            if (!_.isUndefined(config.propNameForErrors)) {
                target._properNameForErrors[name] = config.propNameForErrors;
            }
        }
    };
};
//# sourceMappingURL=model-prop.js.map