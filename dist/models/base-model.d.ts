import { IBaseModel } from "../interfaces/i-base-model";
export declare class BaseModel implements IBaseModel {
    _validators: Object;
    _errorMessages: Object;
    _properties: Array<string>;
    _ignoreProperties: Object;
    constructor(json?: any);
    toJSON(): {};
    getErrors(propertyName?: string): any;
    updateValidatorsOnDiscriminatorChange(discriminatorValue: any, swaggerDef: any, fullSwaggerDef: any): void;
    /**
     * this.getErrors delegates to this method if propertyName was present
     * @param propertyName the property in this model to getErrors
     * @returns {{}} an object of error messages, keys are property names, values are an array of strings/messages
     * @private
     */
    private _validateSingleProperty(propertyName);
    /**
     * this.getErrors delegates to this method if propertyName was NOT present
     * @returns {{}} an object of error messages, keys are property names, values are an array of strings/messages
     * @private
     */
    private _validateAllProperties();
    /**
     * runs all validators for propertyName stored in _validators
     * @param propertyName the property to run the validators for
     * @returns {[] | null}
     * @private
     */
    private _runValidatorsForProperty(propertyName);
}
