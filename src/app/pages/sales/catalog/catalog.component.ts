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
import { switchMap } from "rxjs/operators";
import { Subscription } from "rxjs";

@Component({
  selector: "ab-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
  animations: [entrance],
})
export class CatalogComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("abFilter", { static: true }) _abFilter: AbFilterComponent;

  opportunityActive: CatalogOpportunity;
  groups: Array<GroupCatalogProduct> = [];
  showBanner = true;
  showFabButton = false;
  showMoreLoad = false;
  showProductNav = false;
  screen: any;

  constructor(
    public catalogServices: CatalogService,
    private menuService: MenuService,
    private toolBarService: ToolBarService,
    private elementRef: ElementRef
  ) {
    this.menuService.exibirMenu.next(true);
    this.toolBarService.exibir();
  }

  ngOnInit(): void {
    this.catalogServices.opportunityActive.subscribe((x) => {
      this.groups.length = 0;
      this.opportunityActive = x;
    });
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement
      .querySelector("po-page-content")
      .addEventListener("scroll", this.onScroll.bind(this), true);
  }

  ngOnDestroy() {
    // this.elementRef.nativeElement
    //   .querySelector("po-page-content")
    //   .removeEventListener("scroll", this.onScroll.bind(this), true);
  }

  onScroll(event: any) {
    if (event.srcElement.className === "po-page-content") {
      this.screen = event;
      let scrollIndex = event.target.offsetHeight + event.target.scrollTop;

      if (scrollIndex < 1000) {
        this.showFabButton = false;
        this._abFilter.fixedFilter = false;
        this.toolBarService.exibir();
      } else {
        this.toolBarService.ocultar();
      }

      if (scrollIndex >= event.target.scrollHeight) {
        this._abFilter._categoryContainer.height = undefined;
        this._abFilter.fixedFilter = true;

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

  getProductsByClick(filter: ParamsFilter) {
    if (filter == null) return;

    this.groups.length = 0;
    this.goToTop();

    this.showFabButton = false;

    if (this._abFilter._categoryContainer)
      this._abFilter._categoryContainer.height = 300;

    this.getProducts(filter);
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
          this.goToTop()
        },
        (err) => {
          this.groups.length = 0;
        }
      );
  }
}
