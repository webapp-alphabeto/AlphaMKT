import { IComplementaryProductInformation } from "src/app/shared/models/IComplementaryProductInformation";
import { ProductImageView } from "./ProductImageView";
import { RelatedProducts } from "./RelatedProducts";
import { CatalogProduct } from "../../interfaces/CatalogProduct";
import { BalanceGroupByColor } from "./BalanceGroupByColor";
import { PoComboOption } from '@po-ui/ng-components';

export interface SalesProduct {
  reference: string;
  model: string;
  color: string;
  coordinate: string;
  balance: BalanceGroupByColor[];
  originPrice: number;
  mkup: number;
  group: string;
  map: string;
  price: number;
  complementary: IComplementaryProductInformation;
  photos: string[];
  relatedProducts: CatalogProduct[];
  deliveryDates: PoComboOption[];
}
