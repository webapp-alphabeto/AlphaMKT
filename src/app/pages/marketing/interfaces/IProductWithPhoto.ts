import { IProductImage } from '../../../shared/models/IProductoImage';
export interface IProductWithPhoto extends IProductImage {
    photo: string;
}
