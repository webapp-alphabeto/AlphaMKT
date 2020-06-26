import { SalesOpportunityNavigate } from './SalesOpportunityNavigate';

export interface PriceListByMkup extends SalesOpportunityNavigate {
    name: string;
    alias: string;
    mkup: number;
    termination: number;
}
