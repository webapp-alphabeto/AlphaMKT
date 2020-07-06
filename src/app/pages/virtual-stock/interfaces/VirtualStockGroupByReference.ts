import { VirtualStockBySize } from './VirtualStockBySize';

export interface VirtualStockGroupByReference {
    reference: string;
    model: string;
    photo: string;
    sizes: VirtualStockBySize[];
}