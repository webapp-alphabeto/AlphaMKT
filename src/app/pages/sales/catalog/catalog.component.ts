import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { CatalogService } from "../services/catalog.service";
import { TokenService } from "src/app/core/services/token.service";
import { CheckInService } from "src/app/shared/services/check-in.service";
import { MenuService } from "src/app/shared/services/menu.service";
import { CatalogOpportunity } from "../interfaces/CatalogOpportunity";
import { ToolBarService } from "src/app/shared/services/tool-bar.service";
import { CatalogFilterProducts } from "../interfaces/CatalogFilterProducts";
import { CatalogProduct } from "../interfaces/CatalogProduct";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
})
export class CatalogComponent implements OnInit {
  opportunitys: Array<CatalogOpportunity>;
  opportunityActive: CatalogOpportunity;
  filterActive: CatalogFilterProducts;
  categoryActive: string;
  products: Array<CatalogProduct>;

  constructor(
    private catalogServices: CatalogService,
    private tokenServices: TokenService,
    private checkinServices: CheckInService,
    private menuService: MenuService,
    private toolBarService: ToolBarService
  ) {
    this.menuService.exibirMenu.next(true);
    this.toolBarService.ocultar();
  }

  ngOnInit(): void {
    this.getOpportunitys();
  }

  getOpportunitys() {
    this.catalogServices
      .getOpportunitys(
        this.tokenServices.Claims.representativeId,
        this.checkinServices.checkin.clientId
      )
      .subscribe((x) => {
        this.opportunitys = x;
        this.opportunityActive = x[0];
        this.filterActive = this.opportunityActive.filters[0];
        this.categoryActive = this.filterActive.categories[0];
        this.getProducts();
      });
  }

  getProducts() {
    this.catalogServices
      .getProducts(
        this.opportunityActive.id,
        this.filterActive.collection,
        this.filterActive.map,
        this.categoryActive
      )
      .subscribe((x) => (this.products = x));
  }
}
