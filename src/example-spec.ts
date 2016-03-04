import * as chai from 'chai';
import {Example} from "./example";
let expect = chai.expect;

describe('Example', function () {

    it ('should work', function () {
        let example = new Example();

        let cap = example.capitalize('foo');
        expect(example.capitalize(('foo'))).to.equal('Foo');
    });
});
