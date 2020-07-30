import { Limiters } from '../../sales-opportunity/enums/limiters.enum';
import { TypeRestrictionProduct } from 'src/app/shared/enums/TypeRestrictionProduct';
import { CatalogFilterProducts } from './CatalogFilterProducts';

export interface CatalogOpportunity {
    id: number;
    name: string;
    limiter: Limiters;
    typeRestrictionProduct: TypeRestrictionProduct;
    banners: string[];
    filters: CatalogFilterProducts[];
}


