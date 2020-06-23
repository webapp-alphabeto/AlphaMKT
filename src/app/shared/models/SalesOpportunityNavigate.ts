import { IEntityIdentity } from './IEntityIdentity';
import { SalesOpportunity } from './SalesOpportunity';

export interface SalesOpportunityNavigate extends IEntityIdentity {
    salesOpportunityId: number;
    salesOpportunity: SalesOpportunity;
}
