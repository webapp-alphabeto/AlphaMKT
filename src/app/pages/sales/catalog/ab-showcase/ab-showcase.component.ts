import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { CatalogFilterProducts } from "../../interfaces/CatalogFilterProducts";
import { PriceListByMkupView } from "../../interfaces/PriceListByMkupView";
import { GroupCatalogProduct } from "../../interfaces/GroupCatalogProduct";


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
  @Output() cardProductClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  internalCardProductClick() {
    this.cardProductClick.emit(null);
  }

}
