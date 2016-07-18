import { IModelPropConfig } from "../interfaces/i-model-prop-config";
/**
 * identifies the property it decorates as a model property of the class, target.
 * Since javascript objects are dynamic we must know what properties are to be set
 * on a model so we can validate even the ones that are still undefined
 */
export declare let ModelProp: (config?: IModelPropConfig) => (target: any, name: string) => void;
