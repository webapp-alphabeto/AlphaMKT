import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "./services/product.service";
import { SalesProduct } from "./interfaces/SalesProducts";
import { PoTableColumn } from "@po-ui/ng-components";
import { slideIn } from "src/app/shared/animations/animations";
import { BalanceView } from "./interfaces/BalanceView";
import { BalanceGroupByColor } from "./interfaces/BalanceGroupByColor";
import { SearchService } from "../services/search.service";
import { AbSearchComponent } from "../catalog/ab-filter/ab-search/ab-search.component";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
  animations: [slideIn],
})
export class ProductComponent implements OnInit {
  @ViewChild(AbSearchComponent, { static: true }) search: AbSearchComponent;
  reference: string;
  bagHeadId: number;
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
    private productService: ProductService,
    private searchService: SearchService,
    private router: Router
  ) {
    this.route.params.subscribe((x) => {
      this.reference = x["reference"];
      this.bagHeadId = x["bagHeadId"];
      this.get();
      if (this.search) this.search.cod = "";
    });
  }

  ngOnInit(): void {
    this.searchService.searchValue.subscribe((x) => {
      if (x != null) {
        this.reference = x;
        this.router.navigate([
          "sales/product",
          this.bagHeadId,
          this.reference,
        ]);
      }
    });
  }

  get() {
    this.load = true;
    this.product = undefined;
    this.productService
      .get(this.reference, this.bagHeadId)
      .subscribe(
        (x) => {
          this.product = x;
          this.load = false;
        },
        () => {
          this.load = false;
        }
      );
  }

  purchase(sign: string, row: BalanceView) {
    if (sign == "-") if (row.purchase > 0) row.purchase--;

    if (sign == "+") if (row.purchase < row.balance) row.purchase++;
  }

  grid(item: BalanceGroupByColor, value: number = item.grid) {
    if (value != null) item.grid = value;
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
