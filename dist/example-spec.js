"use strict";
var chai = require('chai');
var example_1 = require("./example");
var expect = chai.expect;
describe('Example', function () {
    it('should work', function () {
        var example = new example_1.Example();
        var cap = example.capitalize('foo');
        expect(example.capitalize(('foo'))).to.equal('Foo');
    });
});
//# sourceMappingURL=example-spec.js.map