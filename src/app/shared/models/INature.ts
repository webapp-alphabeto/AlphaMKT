import { IEntityLog } from './IEntityLog';

export interface INature extends IEntityLog {
    id: string;
    name: string;
    active: boolean;
}
