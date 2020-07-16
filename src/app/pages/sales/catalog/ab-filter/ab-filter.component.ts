import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { CatalogFilterProducts } from "../../interfaces/CatalogFilterProducts";
import { CatalogOpportunity } from "../../interfaces/CatalogOpportunity";
import { ParamsFilter } from "../../interfaces/ParamsFilter";
import { PriceListByMkupView } from "../../interfaces/PriceListByMkupView";
import { CheckInService } from "src/app/shared/services/check-in.service";

@Component({
  selector: "ab-filter",
  templateUrl: "./ab-filter.component.html",
  styleUrls: ["./ab-filter.component.css"],
})
export class AbFilterComponent implements OnInit, OnChanges {
  @Input() opportunityActive: CatalogOpportunity;
  @Output() getFilter = new EventEmitter();
  filterActive: CatalogFilterProducts;
  priceActive: PriceListByMkupView;
  categoryActive: string;
  paramsFilter: ParamsFilter;

  constructor(private checkinService: CheckInService) {
    this.priceActive = this.checkinService.checkin.priceList;
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.opportunityActive) {
      this.filterActive = this.opportunityActive?.filters[0];
      this.changeFilter();
    }
  }

  changeFilter() {
    this.categoryActive = this.filterActive?.groups[0].categories[0];
    this.setParamsFilter();
  }

  public nextFilter(): ParamsFilter {
    let groupIndex = this.getGroupIndex();
    let groupLength = this.filterActive.groups.length;

    let categorieIndex = this.getCategorieIndex(groupIndex);
    let categorieLength = this.filterActive.groups[groupIndex].categories
      .length;
    console.log(categorieIndex, categorieLength);
    if (categorieIndex < categorieLength - 1) {
      this.categoryActive = this.filterActive.groups[groupIndex].categories[
        categorieIndex + 1
      ];
      this.setParamsFilter(false);
    }

    return this.paramsFilter;
  }

  getGroupIndex() {
    let actualyGroup = this.filterActive.groups.find((g) =>
      g.categories.some((c) => c == this.categoryActive)
    );
    return this.filterActive.groups.indexOf(actualyGroup);
  }

  getCategorieIndex(groupIndex) {
    return this.filterActive.groups[groupIndex].categories.indexOf(
      this.categoryActive
    );
  }

  setParamsFilter(emit: boolean = true) {
    if (!this.filterActive) {
      if (emit) this.getFilter.emit(null);
      return;
    }

    this.paramsFilter = {
      category: this.categoryActive,
      collection: this.filterActive.collection,
      map: this.filterActive.map,
      opportunityId: this.opportunityActive?.id,
    };
    if (emit) this.getFilter.emit(this.paramsFilter);
  }

  SetPrice(event: PriceListByMkupView) {
    var checkin = this.checkinService.checkin;
    checkin.priceList = event;
    this.checkinService.checkin = checkin;
  }
}
