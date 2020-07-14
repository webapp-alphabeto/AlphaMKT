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

@Component({
  selector: "ab-filter",
  templateUrl: "./ab-filter.component.html",
  styleUrls: ["./ab-filter.component.css"],
})
export class AbFilterComponent implements OnInit, OnChanges {
  @Input() opportunityActive: CatalogOpportunity;
  @Output() getFilter = new EventEmitter();
  filterActive: CatalogFilterProducts;
  categoryActive: string;
  paramsFilter: ParamsFilter;

  constructor() {}

  ngOnInit(): void {

  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes.opportunityActive) {
      this.filterActive = this.opportunityActive?.filters[0];
      this.changeFilter();
    }
  }

  changeFilter() {
    this.categoryActive = this.filterActive?.categories[0];

    this.setFilter();
  }

  setFilter() {
    if (!this.filterActive) {
      this.getFilter.emit(null);
      return;
    }

    
    this.paramsFilter = {
      category: this.categoryActive,
      collection: this.filterActive.collection,
      map: this.filterActive.map,
      opportunityId: this.opportunityActive?.id,
    };

    this.getFilter.emit(this.paramsFilter);
  }




}
