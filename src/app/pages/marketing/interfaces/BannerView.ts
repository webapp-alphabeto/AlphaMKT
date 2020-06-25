import { BannerType } from 'src/app/shared/enums/BannerType';

export interface BannerView {
    id: number;
    storageName: string;
    bannerType: BannerType;
    photo: string;
}
