import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CatalogProduct } from "../../interfaces/CatalogProduct";
import { Router } from "@angular/router";

@Component({
  selector: "ab-card-product",
  templateUrl: "./ab-card-product.component.html",
  styleUrls: ["./ab-card-product.component.css"],
})
export class AbCardProductComponent implements OnInit {
  @Input() product: CatalogProduct;
  @Input() bagId: number;
  @Output() bagClick = new EventEmitter();
  constructor(private router: Router) {}

  ngOnInit(): void {}

  internalBagClick() {
    this.router.navigate([
      "/sales/product",
      this.bagId,
      this.product.reference
    ]);
    this.bagClick.emit(null);
  }
}
