import { ProductGroup } from './ProductGroup';

export interface CatalogFilterProducts {
    salesOpportunityId: number;
    collection: string;
    groups: ProductGroup[];
}
