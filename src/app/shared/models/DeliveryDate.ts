import { IEntityIdentity } from './IEntityIdentity';
import { SalesOpportunityRestrictionByFilterProducts } from './SalesOpportunityRestrictionByFilterProducts';

export interface DeliveryDate extends IEntityIdentity {
    salesOpportunityRestrictionByFiterProductId: number;
    salesOpportunityRestrictionByFilterProducts: SalesOpportunityRestrictionByFilterProducts;
    date: string;
}
