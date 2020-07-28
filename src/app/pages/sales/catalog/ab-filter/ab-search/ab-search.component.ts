import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { fromEvent } from "rxjs";
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  tap,
} from "rxjs/operators";
import { SearchService } from "../../../services/search.service";

@Component({
  selector: "ab-search",
  templateUrl: "./ab-search.component.html",
  styleUrls: ["./ab-search.component.css"],
})
export class AbSearchComponent implements OnInit, AfterViewInit {
  @ViewChild("inputSearch") input: ElementRef;
  fixedFilter = false;

  cod: string;
  constructor(private searchService: SearchService) {}

  ngOnInit(): void {}
  ngAfterViewInit(): void {
    this.searchInputDebounce();
  }

  private searchInputDebounce() {
    fromEvent(this.input.nativeElement, "keyup")
      .pipe(
        filter(Boolean),
        debounceTime(500),
        distinctUntilChanged(),
        tap((text: string) => {
          this.search();
        })
      )
      .subscribe();
  }

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(v: any): void {
    this.value = v;
  }

  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }

  search() {
    if (this.cod) this.searchService.setValue(this.cod);
  }
}
