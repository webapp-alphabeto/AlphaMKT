import { IEntityLog } from './IEntityLog';

export interface ISalesGroup extends IEntityLog {
    id: string;
    name: string;
    active: boolean;
}
