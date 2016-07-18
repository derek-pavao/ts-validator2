declare module 'ts-validator2' {
	export class Example {
	    derp: boolean;
	    constructor();
	    capitalize(input: string): any;
	}

}
declare module 'ts-validator2' {
	export interface IBaseModel {
	    _validators: Object;
	    _errorMessages: Object;
	    _properties: Array<string>;
	    getErrors(): Object;
	    getErrors(propName: string): Object;
	}

}
declare module 'ts-validator2' {
	export interface IConfig {
	    message?: string;
	}

}
declare module 'ts-validator2' {
	export interface IValidateFn {
	    (modelValue: any): any;
	}

}
declare module 'ts-validator2' {
	import { IConfig } from 'i-config';
	import { IValidateFn } from 'i-validate-fn';
	export interface IValidatorObject {
	    /**
	     * The name of the validator, should match the function name of the decorator
	     * used for this validator
	     */
	    name: string;
	    /**
	     * A default error message if one is not provided by the decorator. You may use
	     * the template string {{propertyName}} inside this string to output the name of the property
	     * this validator was run for
	     */
	    defaultMessage: string;
	    /**
	     * A config object to pass to the validator, usually whatever object that gets passed to the decorator
	     */
	    config?: IConfig;
	    /**
	     * This is the function that actually performs the validation, it takes the modelValue as a parameter
	     * and returns true if it has passed validation and false if it failed
	     */
	    validate: IValidateFn;
	    ngModelController?: any;
	    ngFormController?: any;
	    model?: any;
	}

}
declare module 'ts-validator2' {
	import { IValidatorObject } from '../interfaces/i-validator-object';
	import { IConfig } from '../interfaces/i-config';
	export class NotEmptyValidator implements IValidatorObject {
	    config: IConfig;
	    name: string;
	    defaultMessage: string;
	    constructor(config?: IConfig);
	    validate(modelValue: any): boolean;
	}

}
declare module 'ts-validator2' {
	import { IValidatorObject } from '../interfaces/i-validator-object';
	export let validatorFactory: (validatorObject: IValidatorObject) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	import { IConfig } from '../interfaces/i-config';
	import { IValidatorObject } from '../interfaces/i-validator-object';
	export class IntegerValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: IConfig;
	    constructor(config?: IConfig);
	    validate(modelValue: any): boolean;
	}

}
declare module 'ts-validator2' {
	import { IConfig } from 'i-config';
	export interface IMinLengthConfig extends IConfig {
	    minLength: number;
	}

}
declare module 'ts-validator2' {
	import { IValidatorObject } from '../interfaces/i-validator-object';
	import { IMinLengthConfig } from '../interfaces/i-min-length-config';
	export class MinLengthValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: IMinLengthConfig;
	    constructor(config: IMinLengthConfig);
	    validate(modelValue: string): boolean;
	}

}
declare module 'ts-validator2' {
	import { IConfig } from 'i-config';
	export interface IMaxLengthConfig extends IConfig {
	    maxLength: number;
	}

}
declare module 'ts-validator2' {
	import { IValidatorObject } from '../interfaces/i-validator-object';
	import { IMaxLengthConfig } from '../interfaces/i-max-length-config';
	export class MaxLengthValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: IMaxLengthConfig;
	    constructor(config: IMaxLengthConfig);
	    validate(modelValue: string): boolean;
	}

}
declare module 'ts-validator2' {
	import { IConfig } from 'i-config';
	export interface IAllowedValuesConfig extends IConfig {
	    values: Array<any>;
	}

}
declare module 'ts-validator2' {
	import { IValidatorObject } from '../interfaces/i-validator-object';
	import { IAllowedValuesConfig } from '../interfaces/i-allowed-values-config';
	export class AllowedValuesValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: IAllowedValuesConfig;
	    constructor(config: IAllowedValuesConfig);
	    validate(modelValue: string | number): boolean;
	}

}
declare module 'ts-validator2' {
	import { IConfig } from 'i-config';
	export interface IPatternConfig extends IConfig {
	    pattern: RegExp;
	}

}
declare module 'ts-validator2' {
	import { IPatternConfig } from '../interfaces/i-pattern-config';
	import { IValidatorObject } from '../interfaces/i-validator-object';
	export class PatternValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: IPatternConfig;
	    constructor(config: IPatternConfig);
	    validate(propertyValue: any): boolean;
	}

}
declare module 'ts-validator2' {
	import { IConfig } from 'i-config';
	export interface IMinConfig extends IConfig {
	    name?: string;
	    min: number;
	}

}
declare module 'ts-validator2' {
	import { IValidatorObject } from '../interfaces/i-validator-object';
	import { IMinConfig } from '../interfaces/i-min-config';
	export class MinValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: IMinConfig;
	    constructor(config: IMinConfig);
	    validate(modelValue: any): boolean;
	}

}
declare module 'ts-validator2' {
	import { IConfig } from 'i-config';
	export interface IMaxConfig extends IConfig {
	    name?: string;
	    max: number;
	}

}
declare module 'ts-validator2' {
	import { IMaxConfig } from '../interfaces/i-max-config';
	import { IValidatorObject } from '../interfaces/i-validator-object';
	export class MaxValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: IMaxConfig;
	    constructor(config: IMaxConfig);
	    validate(modelValue: any): boolean;
	}

}
declare module 'ts-validator2' {
	export let attachStaticValidators: (obj: any, swaggerDef: any) => void;
	/**
	 * Decorator function
	 */
	export let SwaggerDef: (swaggerDef: any, fullSwaggerDef?: any) => (target: any) => void;

}
declare module 'ts-validator2' {
	import { IBaseModel } from '../interfaces/i-base-model';
	export class BaseModel implements IBaseModel {
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

}
declare module 'ts-validator2' {
	export interface IModelPropConfig {
	    hasGetterSetter: boolean;
	    propNameForErrors?: string;
	}

}
declare module 'ts-validator2' {
	import { IModelPropConfig } from '../interfaces/i-model-prop-config';
	/**
	 * identifies the property it decorates as a model property of the class, target.
	 * Since javascript objects are dynamic we must know what properties are to be set
	 * on a model so we can validate even the ones that are still undefined
	 */
	export let ModelProp: (config?: IModelPropConfig) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	/**
	 * identifies the property it decorates as not allowed to be empty, essentially required.
	 * "empty" is defined as undefined, null, {}, [], '', ' ';
	 *
	 * @param errorMessage the message to display if the validation fails
	 * @returns {function(Object, string): undefined}
	 */
	export let NotEmpty: (errorMessage?: any) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	import { IAllowedValuesConfig } from '../interfaces/i-allowed-values-config';
	export let AllowedValues: (config: IAllowedValuesConfig) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	import { IConfig } from 'i-config';
	export interface ICustomValidatorConfig extends IConfig {
	    validator: Function;
	}

}
declare module 'ts-validator2' {
	import { ICustomValidatorConfig } from '../interfaces/i-custom-validator-config';
	import { IValidatorObject } from '../interfaces/i-validator-object';
	export class CustomValidatorValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: ICustomValidatorConfig;
	    model: any;
	    constructor(config: ICustomValidatorConfig);
	    validate(propertyValue: any): any;
	}

}
declare module 'ts-validator2' {
	import { ICustomValidatorConfig } from '../interfaces/i-custom-validator-config';
	export let CustomValidator: (config: ICustomValidatorConfig) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	import { IConfig } from 'i-config';
	export interface IEmailConfig extends IConfig {
	    pattern?: RegExp;
	    flags?: string;
	}

}
declare module 'ts-validator2' {
	import { IEmailConfig } from '../interfaces/i-email-config';
	import { IValidatorObject } from '../interfaces/i-validator-object';
	export class EmailValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: IEmailConfig;
	    private emailPattern;
	    private flags;
	    constructor(config: IEmailConfig);
	    validate(propertyValue: any): boolean;
	}

}
declare module 'ts-validator2' {
	import { IEmailConfig } from '../interfaces/i-email-config';
	export let Email: (config?: IEmailConfig) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	export let JsonIgnore: () => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	import { IMaxConfig } from '../interfaces/i-max-config';
	export let Max: (config: IMaxConfig) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	import { IMaxLengthConfig } from '../interfaces/i-max-length-config';
	export let MaxLength: (config: IMaxLengthConfig) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	import { IMinConfig } from '../interfaces/i-min-config';
	/**
	 * identifies the property it decorates as having a minimum value of config.min.
	 * will treat '7' as 7 for validation purposes
	 *
	 * @param config configuration with min and message properties
	 * @returns {function(any, string): undefined}
	 */
	export let Min: (config: IMinConfig) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	import { IMinLengthConfig } from '../interfaces/i-min-length-config';
	export let MinLength: (config: IMinLengthConfig) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	import { IPatternConfig } from '../interfaces/i-pattern-config';
	export let Pattern: (config: IPatternConfig) => (target: any, name: string) => void;

}
declare module 'ts-validator2' {
	export { BaseModel } from 'models/base-model';
	export { validatorFactory } from 'utils/validator-factory';
	export { ModelProp } from 'decorators/model-prop';
	export { NotEmpty } from 'decorators/not-empty';
	export { AllowedValues } from 'decorators/allowed-values';
	export { CustomValidator } from 'decorators/custom-validator';
	export { Email } from 'decorators/email';
	export { JsonIgnore } from 'decorators/json-ignore';
	export { Max } from 'decorators/max';
	export { MaxLength } from 'decorators/max-length';
	export { Min } from 'decorators/min';
	export { MinLength } from 'decorators/min-length';
	export { Pattern } from 'decorators/pattern';
	export { SwaggerDef } from 'decorators/swagger-def';

}
declare module 'ts-validator2' {
	import { IConfig } from '../interfaces/i-config';
	import { IValidatorObject } from '../interfaces/i-validator-object';
	export class FloatValidator implements IValidatorObject {
	    name: string;
	    defaultMessage: string;
	    config: IConfig;
	    constructor(config?: IConfig);
	    validate(modelValue: any): boolean;
	}

}
