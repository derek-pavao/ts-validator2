import { IConfig } from './i-config';
export interface IMaxConfig extends IConfig {
    name?: string;
    max: number;
}
