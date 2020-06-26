import { SalesOpportunityNavigate } from './SalesOpportunityNavigate';

export interface PriceListByReference extends SalesOpportunityNavigate {
    reference: string;
    salesPrice: number;
}
