import { IEntityIdentity } from './IEntityIdentity';
import { Limiters } from 'src/app/pages/sales-opportunity/enums/limiters.enum';
import { TypeRestrictionProduct } from '../enums/TypeRestrictionProduct';

export interface SalesOpportunity extends IEntityIdentity {
    name: string;
    start: Date;
    end: Date;
    active: boolean;
    limiter: Limiters;
    typeRestrictionProduct: TypeRestrictionProduct;
}
