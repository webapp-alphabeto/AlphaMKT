import { Component, OnInit, Input } from "@angular/core";
import { CatalogFilterProducts } from "../../interfaces/CatalogFilterProducts";
import { PriceListByMkupView } from "../../interfaces/PriceListByMkupView";
import { CatalogProduct } from '../../interfaces/CatalogProduct';
import { GroupCatalogProduct } from '../../interfaces/GroupCatalogProduct';

@Component({
  selector: "ab-showcase",
  templateUrl: "./ab-showcase.component.html",
  styleUrls: ["./ab-showcase.component.css"],
})
export class AbShowcaseComponent implements OnInit {
  @Input() filterActive: CatalogFilterProducts;
  @Input() categoryActive: string;
  @Input() priceActive: PriceListByMkupView;
  @Input() groupProduct: GroupCatalogProduct;
  // products: Array<CatalogProduct>;
  constructor() {}

  ngOnInit(): void {}
}
