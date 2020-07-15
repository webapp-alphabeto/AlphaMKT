import { PriceView } from './PriceView';

export interface CatalogProduct {
  reference: string;
  model: string;
  balance: number;
  prices: PriceView[];
  originPrice: number;
  storageName: string;
  photo: string;
}

