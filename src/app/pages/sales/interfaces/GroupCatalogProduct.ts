import { CatalogProduct } from "./CatalogProduct";
export interface GroupCatalogProduct {
  group: string;
  category: string;
  catalogProduct: CatalogProduct[];
}
