import { CatalogProduct } from "./CatalogProduct";
export interface GroupCatalogProduct {
  collection: string;
  group: string;
  category: string;
  catalogProduct: CatalogProduct[];
}
