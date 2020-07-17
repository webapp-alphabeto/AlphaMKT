import {
  Component,
  OnInit,
  ViewEncapsulation,
  HostListener,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";
import { CatalogService } from "../services/catalog.service";
import { TokenService } from "src/app/core/services/token.service";
import { CheckInService } from "src/app/shared/services/check-in.service";
import { MenuService } from "src/app/shared/services/menu.service";
import { CatalogOpportunity } from "../interfaces/CatalogOpportunity";
import { ToolBarService } from "src/app/shared/services/tool-bar.service";
import { CatalogProduct } from "../interfaces/CatalogProduct";
import { ParamsFilter } from "../interfaces/ParamsFilter";
import { AbFilterComponent } from "./ab-filter/ab-filter.component";
import { GroupCatalogProduct } from "../interfaces/GroupCatalogProduct";
import { entrance } from "src/app/shared/animations/animations";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
  animations: [entrance],
})
export class CatalogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("abFilter", { static: true }) _abFilter: AbFilterComponent;

  opportunitys: Array<CatalogOpportunity>;
  opportunityActive: CatalogOpportunity;
  groupProducts: GroupCatalogProduct;
  groups: Array<GroupCatalogProduct> = [];
  showBanner = true;
  showFabButton = false;
  screen: any;

  constructor(
    private catalogServices: CatalogService,
    private tokenServices: TokenService,
    private checkinServices: CheckInService,
    private menuService: MenuService,
    private toolBarService: ToolBarService,
    private elementRef: ElementRef
  ) {
    this.menuService.exibirMenu.next(true);
    this.toolBarService.ocultar();
  }

  ngOnInit(): void {
    this.getOpportunitys();
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelector("po-page-content")
      .addEventListener("scroll", this.onScroll.bind(this), true);
  }
  onScroll(event: any) {
    if (event.srcElement.className === "po-page-content") {
      this.screen = event;
      let scrollIndex = event.target.offsetHeight + event.target.scrollTop;

      if (scrollIndex >= event.target.scrollHeight) {
        let filter = this._abFilter.nextFilter();
        this.getProducts(filter);
        this.showFabButton = true;
      }
    }
  }

  goToTop() {
    if (!this.screen) return;

    this.screen.target.scrollTo({ top: 300, behavior: "smooth" });
  }

  ngOnDestroy() {
    this.elementRef.nativeElement
      .querySelector("po-page-content")
      .removeEventListener("scroll", this.onScroll.bind(this), true);
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
      });
  }

  getProductsByClick(filter: ParamsFilter) {
    if (filter == null) return;

    this.groups.length = 0;
    this.goToTop();

    this.showFabButton = false;

    this.getProducts(filter);
  }

  getProducts(filter: ParamsFilter) {
    if (filter == null) return;

    this.catalogServices.getProducts(filter).subscribe((x) => {
      if (this.groupExists(x)) this.groups.push(x);
    });
  }

  private groupExists(x: GroupCatalogProduct): boolean {
    return !this.groups.find(
      (g) =>
        g.collection == x.collection &&
        g.map == x.map &&
        g.category == x.category &&
        g.group == x.group
    );
  }
}
