import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { CatalogFilterProducts } from "../../interfaces/CatalogFilterProducts";
import { CatalogOpportunity } from "../../interfaces/CatalogOpportunity";
import { ParamsFilter } from "../../interfaces/ParamsFilter";
import { PriceListByMkupView } from "../../interfaces/PriceListByMkupView";
import { CheckInService } from "src/app/shared/services/check-in.service";
import { fromEvent } from "rxjs";
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from "rxjs/operators";
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: "ab-filter",
  templateUrl: "./ab-filter.component.html",
  styleUrls: ["./ab-filter.component.css"],
})
export class AbFilterComponent implements OnInit, OnChanges {
  @ViewChild("inputSearch") input: ElementRef;
  @ViewChild(BarecodeScannerLivestreamComponent)
    barecodeScanner: BarecodeScannerLivestreamComponent;

  @Input() opportunityActive: CatalogOpportunity;
  @Output() getFilter = new EventEmitter();
  @Output() search = new EventEmitter();
  filterActive: CatalogFilterProducts;
  priceActive: PriceListByMkupView;
  categoryActive: string;
  groupActive: string;
  paramsFilter: ParamsFilter;
  cod: string;

  constructor(private checkinService: CheckInService) {
    this.priceActive = this.checkinService.checkin.priceList;
  }

  barcodeValue;
 

  onValueChanges(result){
      this.barcodeValue = result.codeResult.code;
      console.log(result)
  }

  onStarted(started){
      console.log(started);
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.barecodeScanner.start();

    fromEvent(this.input.nativeElement, "keyup")
      .pipe(
        filter(Boolean),
        debounceTime(1000),
        distinctUntilChanged(),
        tap((text: string) => {
          if (this.cod) this.getByCod(this.cod);
        })
      )
      .subscribe();
  }

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

  public nextFilter(): ParamsFilter {
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

    return this.paramsFilter;
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
      map: this.filterActive.map,
      group: group,
      opportunityId: this.opportunityActive?.id,
    };
    if (emit) this.getFilter.emit(this.paramsFilter);
  }

  SetPrice(event: PriceListByMkupView) {
    var checkin = this.checkinService.checkin;
    checkin.priceList = event;
    this.checkinService.checkin = checkin;
  }

  getByCod(cod: string) {
    this.search.emit(cod);
  }
}
