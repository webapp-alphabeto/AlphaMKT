import {
  Component,
  OnInit,
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

  groups: Array<GroupCatalogProduct> = [];
  showBanner = true;
  showFabButton = false;
  showMoreLoad = false;
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

      if (scrollIndex < 1000) this.showFabButton = false;

      if (scrollIndex >= event.target.scrollHeight) {
        this._abFilter._categoryContainer.height = undefined;

        let nextFilter = this._abFilter.nextGroupAndCategoryFilter();
        this.getProducts(nextFilter.params);
        this.showFabButton = true;

        this.showMoreLoad = nextFilter.hasNext;
      }
    }
  }

  loadMore() {
    let nextFilter = this._abFilter.nextMapFilter();
    this.showMoreLoad = nextFilter.hasNext;
    this.getProducts(nextFilter.params);
  }

  goToTop() {
    if (!this.screen) return;

    this.screen.target.scrollTo({ top: 300, behavior: "smooth" });

    this.showFabButton = false;
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

    if (this._abFilter._categoryContainer)
      this._abFilter._categoryContainer.height = 300;

    this.getProducts(filter);
  }

  getProducts(filter: ParamsFilter) {
    if (filter == null) return;

    this.catalogServices.getProducts(filter).subscribe((x) => {
      if (this.groupExists(x)) this.groups.push(x);
    });
  }

  getProductByCod(cod: string) {
    this.showFabButton = false;

    if (this._abFilter._categoryContainer)
      this._abFilter._categoryContainer.height = 300;

    this.catalogServices
      .getProductByCod(this.opportunityActive.id, cod)
      .subscribe(
        (x) => {
          this.groups.length = 0;
          this.groups.push(x);
        },
        () => {
          this.groups.length = 0;
        }
      );
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
  changeOpportunity(event) {
    if (!event.isTrusted) {
      this.groups.length = 0;
      this.opportunityActive = event;
    }
  }
}
