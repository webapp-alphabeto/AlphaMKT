import { DeliveryDateView } from './DeliveryDateView';


export interface RestrictionByFilterProductView {
  id: number;
  name: string;
  deliveryDates: DeliveryDateView[];
}

