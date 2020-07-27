import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CatalogProduct } from "../../interfaces/CatalogProduct";


@Component({
  selector: "ab-card-product",
  templateUrl: "./ab-card-product.component.html",
  styleUrls: ["./ab-card-product.component.css"],
})
export class AbCardProductComponent implements OnInit {
  @Input() product: CatalogProduct;
  @Input() listPriceId: number = 0;
  @Input() opportunityId: number;
  @Output() bagClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  internalBagClick(){
    this.bagClick.emit(null);
  }
}
