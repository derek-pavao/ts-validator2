import {IBaseModel} from "../interfaces/i-base-model";
import * as _ from 'lodash';
import {attachStaticValidators} from "../decorators/swagger-def";

export class BaseModel implements IBaseModel {

    public _validators: Object;
    public _errorMessages: Object;
    public _properties: Array<string>;
    public _ignoreProperties: Object;

    constructor(json?) {
        json = json || {};

        _.forEach(this._properties, (propertyName: string) => this[propertyName] = json[propertyName]);
    }

    public toJSON() {
        const obj = {};

        _.forEach(this._properties, (propertyName: string) => {
            if (_.isUndefined(this._ignoreProperties[propertyName])) {
                obj[propertyName] = this[propertyName];
            }
        });

        return obj;
    }

    public getErrors(propertyName?: string) {
        const errorMap = (propertyName) ? this._validateSingleProperty(propertyName) : this._validateAllProperties();

        return _.isEmpty(errorMap) ? null : errorMap;
    }

     public updateValidatorsOnDiscriminatorChange(discriminatorValue: any, swaggerDef, fullSwaggerDef) {
        const allOf = fullSwaggerDef.api.definitions[discriminatorValue].allOf;
        this._validators = {};

        const newSwaggerDef = _.merge.apply(this, [{}].concat(allOf));

        attachStaticValidators(this, newSwaggerDef);
     }


    /**
     * this.getErrors delegates to this method if propertyName was present
     * @param propertyName the property in this model to getErrors
     * @returns {{}} an object of error messages, keys are property names, values are an array of strings/messages
     * @private
     */
    private _validateSingleProperty(propertyName: string): any {
        const errorMap = {};

        if (this._validators.hasOwnProperty(propertyName)) {
            let errors = this._runValidatorsForProperty(propertyName);
            if (errors !== null) {
                errorMap[propertyName] = errors;
            }
        }

        return errorMap;
    }

    /**
     * this.getErrors delegates to this method if propertyName was NOT present
     * @returns {{}} an object of error messages, keys are property names, values are an array of strings/messages
     * @private
     */
    private _validateAllProperties(): any {
        const errorMap = {};

        _.forEach(this._properties, (propertyName: string) => {
            let errors = this._runValidatorsForProperty(propertyName);
            if (errors !== null) {
                errorMap[propertyName] = errors;
            }
        });

        return errorMap;
    }


    /**
     * runs all validators for propertyName stored in _validators
     * @param propertyName the property to run the validators for
     * @returns {[] | null}
     * @private
     */
    private _runValidatorsForProperty(propertyName: string) {
        const value = this[propertyName];
        const errors = [];

        if (typeof this._validators[propertyName] !== 'undefined') {

            _.forEach(this._validators[propertyName], (validator: any) => {
                validator.model = this;

                if (!validator.validate(value)) {
                    errors.push(this._errorMessages[propertyName][validator.name]);
                }
            });
        }

        if (_.isEmpty(errors)) {
            return null;
        } else {
            return errors;
        }
    }
}
