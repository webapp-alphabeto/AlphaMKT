import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductNavService {
  private $showProductNav = new BehaviorSubject<boolean>(false);

  showProductNav = this.$showProductNav.asObservable();

  show() {
    this.$showProductNav.next(true);
  }
  hide() {
    this.$showProductNav.next(false);
  }
}
