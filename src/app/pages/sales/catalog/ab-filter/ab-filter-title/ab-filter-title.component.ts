import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: "ab-filter-title",
  templateUrl: "./ab-filter-title.component.html",
  styleUrls: ["./ab-filter-title.component.css"],
})
export class AbFilterTitleComponent implements OnInit {
  @Input() title: string;
  @Output() actionTitleClick = new EventEmitter();

  isMobile: boolean = false;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.checkMobile();
  }

  private checkMobile() {
    this.breakpointObserver
      .observe(["(max-width: 700px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.isMobile = false;
        } else {
          this.isMobile = true;
        }
      });
  }

  titleClick() {
    this.actionTitleClick.emit(null);
  }
}
