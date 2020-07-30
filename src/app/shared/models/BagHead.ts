import { IEntityIdentity } from './IEntityIdentity';


export interface BagHead extends IEntityIdentity {
    clientId: number;
    representativeId: number;
    opportunityId: number;
    priceListId: number;
}
