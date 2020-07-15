import { PriceListByMkupView } from 'src/app/pages/sales/interfaces/PriceListByMkupView';

export interface CheckIn {
  clientId: number;
  clientName: string;
  representativeId: number;
  priceList?: PriceListByMkupView;
}
