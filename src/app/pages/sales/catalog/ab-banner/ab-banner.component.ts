import { Component, OnInit, Input } from "@angular/core";
import { BreakpointObserver, BreakpointState } from "@angular/cdk/layout";

@Component({
  selector: "ab-banner",
  templateUrl: "./ab-banner.component.html",
  styleUrls: ["./ab-banner.component.css"],
})
export class AbBannerComponent implements OnInit {
  @Input() items: Array<string>;
  show = true;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.showBanner();
  }

  private showBanner() {
    this.breakpointObserver
      .observe(["(max-width: 700px)"])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.show = false;
        } else {
          this.show = true;
        }
      });
  }
}
