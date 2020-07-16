import { CatalogProduct } from './CatalogProduct';
export interface GroupCatalogProduct {
  collection: string;
  map: string;
  category: string;
  catalogProduct: CatalogProduct[];
}
