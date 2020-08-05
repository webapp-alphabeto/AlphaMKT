import { IEntityIdentity } from './IEntityIdentity';
import { SalesOpportunityRestrictionByFilterProducts } from './SalesOpportunityRestrictionByFilterProducts';

export interface DeliveryDate extends IEntityIdentity {
    salesOpportunityRestrictionByFilterProductsId: number;
    salesOpportunityRestrictionByFilterProducts: SalesOpportunityRestrictionByFilterProducts;
    date: string;
}
