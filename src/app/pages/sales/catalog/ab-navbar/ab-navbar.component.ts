import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges} from "@angular/core";
import { CatalogOpportunity } from "../../interfaces/CatalogOpportunity";

@Component({
  selector: "ab-navbar",
  templateUrl: "./ab-navbar.component.html",
  styleUrls: ["./ab-navbar.component.css"],
})
export class AbNavbarComponent implements OnInit, OnChanges {
  
  @Input() items: Array<CatalogOpportunity>;
  @Output() select = new EventEmitter();
  itemActive: CatalogOpportunity;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.items) {
      if (this.items && this.items.length > 0) this.itemActive = this.items[0];
    }
  }

  selectItem(item: CatalogOpportunity) {
    this.itemActive = item;
    this.select.emit(item);
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
