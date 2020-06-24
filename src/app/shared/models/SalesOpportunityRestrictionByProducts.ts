import { SalesOpportunityNavigate } from './SalesOpportunityNavigate';
import { Product } from './Product';
export interface SalesOpportunityRestrictionByProducts extends SalesOpportunityNavigate {
    productId: number;
    product: Product;
}

