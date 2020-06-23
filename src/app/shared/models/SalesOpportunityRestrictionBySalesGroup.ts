import { SalesOpportunityNavigate } from './SalesOpportunityNavigate';
import { ISalesGroup } from './ISalesGroup';

export interface SalesOpportunityRestrictionBySalesGroup extends SalesOpportunityNavigate {
    salesGroupId: string;
    salesGroup: ISalesGroup;
}
