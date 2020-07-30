import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from "@angular/core";
import { CatalogFilterProducts } from "../../interfaces/CatalogFilterProducts";
import { CatalogOpportunity } from "../../interfaces/CatalogOpportunity";
import { ParamsFilter } from "../../interfaces/ParamsFilter";
import { PriceListByMkupView } from "../../interfaces/PriceListByMkupView";
import { CheckInService } from "src/app/shared/services/check-in.service";
import { AbSideMenuComponent } from "./ab-side-menu/ab-side-menu.component";
import { INextFilter } from "../../interfaces/INextFilter";
import { PoContainerComponent } from "@po-ui/ng-components";

@Component({
  selector: "ab-filter",
  templateUrl: "./ab-filter.component.html",
  styleUrls: ["./ab-filter.component.css"],
})
export class AbFilterComponent implements OnInit, OnChanges {
  @ViewChild("sideMenu", { static: true }) _sideMenu: AbSideMenuComponent;
  @ViewChild("categoryContainer")
  _categoryContainer: PoContainerComponent;

  @Input() opportunityActive: CatalogOpportunity;
  @Input() bagId: number;
  @Output() getFilter = new EventEmitter();
  @Output() search = new EventEmitter();
  fixedFilter = false;
  filterActive: CatalogFilterProducts;
  categoryActive: string;
  groupActive: string;
  paramsFilter: ParamsFilter;
  cod: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.opportunityActive) {
      this.filterActive = this.opportunityActive?.filters[0];
      this.changeFilter();
    }
  }

  changeFilter() {
    this.categoryActive = this.filterActive?.groups[0].categories[0];
    this.groupActive = this.filterActive?.groups[0].group;
    this.setParamsFilter(true, this.groupActive);
  }

  public nextMapFilter(): INextFilter {
    let nextFilter = {} as INextFilter;
    nextFilter.hasNext = true;

    const filterLength = this.opportunityActive.filters.length - 1;

    nextFilter.params = this.paramsFilter;
    return nextFilter;
  }

  public nextGroupAndCategoryFilter(): INextFilter {
    let nextFilter = {} as INextFilter;
    nextFilter.hasNext = false;
    let groupIndex = this.getGroupIndex();
    let groupLength = this.filterActive.groups.length - 1;

    let categorieIndex = this.getCategorieIndex(groupIndex);
    let categorieLength = this.filterActive.groups[groupIndex].categories
      .length;

    categorieIndex++;
    if (categorieIndex == categorieLength) {
      categorieIndex = 0;

      if (groupIndex < groupLength) {
        groupIndex++;
        this.groupActive = this.filterActive.groups[groupIndex].group;
      } else {
    
        const filterLength = this.opportunityActive.filters.length - 1;

      }

      categorieLength =
        this.filterActive.groups[groupIndex].categories.length - 1;
    }

    if (categorieIndex <= categorieLength) {
      this.categoryActive = this.filterActive.groups[groupIndex].categories[
        categorieIndex
      ];
      this.setParamsFilter(false, this.groupActive);
    }

    nextFilter.params = this.paramsFilter;

    return nextFilter;
  }

  getGroupIndex() {
    let actualyGroup = this.filterActive.groups.find(
      (g) => g.group == this.groupActive
    );
    return this.filterActive.groups.indexOf(actualyGroup);
  }

  getCategorieIndex(groupIndex) {
    return this.filterActive.groups[groupIndex].categories.indexOf(
      this.categoryActive
    );
  }

  setParamsFilter(emit: boolean = true, group: string) {
    if (!this.filterActive) {
      if (emit) this.getFilter.emit(null);
      return;
    }

    this.paramsFilter = {
      category: this.categoryActive,
      collection: this.filterActive.collection,
      group: group,
      opportunityId: this.opportunityActive?.id,
      bagId: 0
    };
    if (emit) this.getFilter.emit(this.paramsFilter);
  }




}
