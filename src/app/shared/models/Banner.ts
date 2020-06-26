import { BannerType } from '../enums/BannerType';
import { SalesOpportunityNavigate } from './SalesOpportunityNavigate';


export interface Banner extends SalesOpportunityNavigate {
    storageName: string;
    bannerType: BannerType;
}

