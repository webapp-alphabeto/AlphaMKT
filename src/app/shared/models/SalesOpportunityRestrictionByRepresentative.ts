import { SalesOpportunityNavigate } from './SalesOpportunityNavigate';
import { IRepresentative } from './IRepresentative';


export interface SalesOpportunityRestrictionByRepresentative extends SalesOpportunityNavigate {
    representativeId: number;
    representative: IRepresentative;
}
