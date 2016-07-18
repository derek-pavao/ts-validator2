import { IMinConfig } from "../interfaces/i-min-config";
/**
 * identifies the property it decorates as having a minimum value of config.min.
 * will treat '7' as 7 for validation purposes
 *
 * @param config configuration with min and message properties
 * @returns {function(any, string): undefined}
 */
export declare let Min: (config: IMinConfig) => (target: any, name: string) => void;
