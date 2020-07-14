import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'ab-side-menu',
  templateUrl: './ab-side-menu.component.html',
  styleUrls: ['./ab-side-menu.component.css']
})
export class AbSideMenuComponent implements OnInit {
  isMobile = false;
  showSideMenu = false;
  constructor(public breakpointObserver: BreakpointObserver) { }

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


}
