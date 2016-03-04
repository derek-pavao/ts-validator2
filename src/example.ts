import * as _ from 'lodash';

export class Example {

    public derp: boolean;

    constructor() {
        this.derp = true;
    }

    public capitalize(input: string) {
        return _.capitalize(input);
    }
}
