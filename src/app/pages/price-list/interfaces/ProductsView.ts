import { PriceListByReference } from './PriceListByReference';

export interface ProductsView {
    reference: string;
    model: string;
    category: string;
    photo: string;
    priceList: PriceListByReference[];
}


