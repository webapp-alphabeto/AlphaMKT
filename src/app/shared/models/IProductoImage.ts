import { IEntityIdentity } from './IEntityIdentity';

export interface IProductImage extends IEntityIdentity {
    reference: string;
    storageName: string;
    webSiteCover: boolean;
    erpCover: boolean;
    foto: string;
}


