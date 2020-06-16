import { IEntityIdentity } from './IEntityIdentity';
import { IClient } from './IClient';

export interface ICommercialReference extends IEntityIdentity {
    clientId: number;
    client: IClient;
    cnpj: string;
    company: string;
    contact: string;
}
