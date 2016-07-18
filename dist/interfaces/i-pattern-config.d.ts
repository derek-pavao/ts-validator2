import { IConfig } from "./i-config";
export interface IPatternConfig extends IConfig {
    pattern: RegExp;
}
