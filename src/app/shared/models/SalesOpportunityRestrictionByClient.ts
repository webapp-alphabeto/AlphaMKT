import { SalesOpportunityNavigate } from './SalesOpportunityNavigate';
import { IClient } from './IClient';


export interface SalesOpportunityRestrictionByClient extends SalesOpportunityNavigate {
    clientId: number;
    client: IClient;
}


