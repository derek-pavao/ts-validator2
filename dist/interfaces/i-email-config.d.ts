import { IConfig } from "./i-config";
export interface IEmailConfig extends IConfig {
    pattern?: RegExp;
    flags?: string;
}
