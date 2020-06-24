import { Limiters } from '../enums/limiters.enum';

export interface FilterProduct {
  collection: string;
  map: string;
  limiter: Limiters;
  balance? : number;
}


