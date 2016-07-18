"use strict";
var _ = require('lodash');
var Example = (function () {
    function Example() {
        this.derp = true;
    }
    Example.prototype.capitalize = function (input) {
        return _.capitalize(input);
    };
    return Example;
}());
exports.Example = Example;
//# sourceMappingURL=example.js.map