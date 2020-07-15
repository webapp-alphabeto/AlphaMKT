import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import {
  trigger,
  transition,
  style,
  animate,
  state,
} from "@angular/animations";

@Component({
  selector: "ab-filter-box",
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ transform: "height:100%", opacity: 0 }),
        animate("0.5s", style({ transform: "height:0", opacity: 1 })),
      ]),
      transition(":leave", [
        style({ transform: "height:0", opacity: 1 }),
        animate("0.5s", style({ transform: "height:100%", opacity: 0 })),
      ]),
    ]),
    trigger("slideIn", [
      state("*", style({ "overflow-y": "hidden" })),
      state("void", style({ "overflow-y": "hidden" })),
      transition("* => void", [
        style({ height: "*" }),
        animate(250, style({ height: 0 })),
      ]),
      transition("void => *", [
        style({ height: "0" }),
        animate(250, style({ height: "*" })),
      ]),
    ]),
  ],
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
