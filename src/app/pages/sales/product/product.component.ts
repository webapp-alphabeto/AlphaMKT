import { Component, OnInit } from "@angular/core";
import { ToolBarService } from "src/app/shared/services/tool-bar.service";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "./services/product.service";
import { SalesProduct } from "./interfaces/SalesProducts";
import { PoTableColumn } from "@po-ui/ng-components";
import { entrance, slideIn } from 'src/app/shared/animations/animations';

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  animations:[slideIn]
})
export class ProductComponent implements OnInit {
  reference: string;
  opportunityId: number;
  priceListId: number;
  load: boolean = true;
  product: SalesProduct;

  columSizes: Array<PoTableColumn> = [
    { property: "productId", visible: false },
    { property: "size", label: "Tamanho", width: "33%" },
    { property: "balance", label: "Estoque", type: "number", width: "33%" },
    {
      property: "purchase",
      label: "Pedido",
      type: "cellTemplate",
      width: "33%",
    },
  ];

  slides: string[];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.route.params.subscribe((x) => {
      this.reference = x["reference"];
      this.opportunityId = x["opportunityId"];
      this.priceListId = x["priceListId"];
      this.get();
    });
  }

  ngOnInit(): void {}

  get() {
    this.load = true;
    this.productService
      .get(this.reference, this.opportunityId, this.priceListId)
      .subscribe((x) => {
        this.product = x;
        this.load = false;
      });
  }
}
