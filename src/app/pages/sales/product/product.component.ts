import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "./services/product.service";
import { SalesProduct } from "./interfaces/SalesProducts";
import { PoTableColumn } from "@po-ui/ng-components";
import { slideIn } from "src/app/shared/animations/animations";
import { BalanceView } from "./interfaces/BalanceView";
import { BalanceGroupByColor } from "./interfaces/BalanceGroupByColor";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  animations: [slideIn],
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

  purchase(sign: string, row: BalanceView) {
    if (sign == "-") if (row.purchase > 0) row.purchase--;

    if (sign == "+") if (row.purchase < row.balance) row.purchase++;
  }

  grid(item: BalanceGroupByColor, value: number = item.grid) {
    if (value != null)
    item.grid = value;
      item.balance.forEach((y) => {
        if (item.grid > 0) y.purchase = item.grid;
        else {
          y.purchase = 0;
          return;
        }
        if (item.grid < y.balance) y.purchase = item.grid;
        else y.purchase = y.balance;
      });
  }
}
