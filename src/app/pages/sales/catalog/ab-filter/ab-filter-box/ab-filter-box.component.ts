import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from "@angular/animations";
import { slideIn } from "../../../../../shared/animations/animations";

@Component({
  selector: "ab-filter-box",
  animations: [slideIn],
  templateUrl: "./ab-filter-box.component.html",
  styleUrls: ["./ab-filter-box.component.css"],
})
export class AbFilterBoxComponent implements OnInit {
  @Input() title: string;
  @Input() filterActive: any;
  @Input() filters: any[];
  @Input() fieldIterator: string;
  @Input() height: number;
  @Output() filterClick = new EventEmitter();

  showFilters = true;
  constructor() {}

  ngOnInit(): void {}

  actionFilterClick(event: any) {
    this.filterActive = event;
    this.filterClick.emit(event);
  }

  checkActive(f1: any, f2: any): boolean {
    return JSON.stringify(f1) == JSON.stringify(f2);
  }
}
