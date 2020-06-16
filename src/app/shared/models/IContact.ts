import { IEntityIdentity } from './IEntityIdentity';
import { IClient } from './IClient';

export interface IContact extends IEntityIdentity {
    clientId: number;
    client: IClient;
    type: string;
    name: string;
    phone: string;
    email: string;
}
