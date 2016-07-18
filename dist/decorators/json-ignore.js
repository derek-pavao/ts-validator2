"use strict";
exports.JsonIgnore = function () {
    return function (target, name) {
        target._ignoreProperties = target._ignoreProperties || {};
        target._ignoreProperties[name] = true;
    };
};
//# sourceMappingURL=json-ignore.js.map