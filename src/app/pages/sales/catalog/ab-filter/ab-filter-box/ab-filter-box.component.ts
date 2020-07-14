import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "ab-filter-box",
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
  constructor() {}

  ngOnInit(): void {}

  actionFilterClick(event: any) {
    this.filterActive = event;
    this.filterClick.emit(event);
  }
}
