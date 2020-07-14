import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "ab-filter-title",
  templateUrl: "./ab-filter-title.component.html",
  styleUrls: ["./ab-filter-title.component.css"],
})
export class AbFilterTitleComponent implements OnInit {
  @Input() title: string;
  @Output() actionTitleClick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  titleClick(){
    this.actionTitleClick.emit(null);
  }
}
