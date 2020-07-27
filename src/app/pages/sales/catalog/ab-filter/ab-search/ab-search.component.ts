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
import { fromEvent } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: "app-ab-search",
  templateUrl: "./ab-search.component.html",
  styleUrls: ["./ab-search.component.css"],
})
export class AbSearchComponent implements OnInit, AfterViewInit {
  @ViewChild("inputSearch") input: ElementRef;
  @Input() label: string;
  @Input("name") name: string;
  @Input() isReadOnly = false;
  @Output() search = new EventEmitter();
  fixedFilter = false;

  cod: string;
  constructor() {}

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
          if (this.cod) this.search.emit(this.cod);
        })
      )
      .subscribe();
  }
}
