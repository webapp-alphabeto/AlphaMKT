import { CatalogProduct } from "./CatalogProduct";
export interface GroupCatalogProduct {
  collection: string;
  map: string;
  group: string;
  category: string;
  catalogProduct: CatalogProduct[];
}
