import { IEntityLog } from './IEntityLog';
import { Stock } from './Stock';
import { IntegrationStatus } from '../enums/IntegrationStatus.enums';

export interface Product extends IEntityLog {
    id: string;
    stock: Stock;
    barCode: string;
    name: string;
    line: string;
    category: string;
    collection: string;
    group: string;
    model: string;
    color: string;
    size: string;
    reference: string;
    map: string;
    offer: number;
    coordinate: string;
    sku: string;
    salePrice: number;
    shippingForecast1: string;
    shippingForecast2: string;
    shippingForecast3: string;
    integrationState: IntegrationStatus;
}

