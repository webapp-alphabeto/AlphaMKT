import { IEntityLog } from './IEntityLog';
import { Product } from './Product';
import { Systems } from '../enums/system.enums';

export interface Stock extends IEntityLog {
    id: string;
    productId: string;
    product: Product;
    currentBalance: number;
    balanceAvailable: number;
    unitCost: number;
    currentBalanceAmount: number;
    ecommerceBalance: number;
    system: Systems;
}
