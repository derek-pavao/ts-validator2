import { IConfig } from './i-config';
export interface IMinConfig extends IConfig {
    name?: string;
    min: number;
}
