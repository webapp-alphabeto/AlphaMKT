import { Component, OnInit, Input } from "@angular/core";
import { CatalogProduct } from "../../interfaces/CatalogProduct";

@Component({
  selector: "ab-card-product",
  templateUrl: "./ab-card-product.component.html",
  styleUrls: ["./ab-card-product.component.css"],
})
export class AbCardProductComponent implements OnInit {
  @Input() product: CatalogProduct;
  @Input() listPriceId: number;
  constructor() {}

  ngOnInit(): void {}
}
