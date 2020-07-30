import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { environment } from "src/environments/environment";
import { BagHead } from "src/app/shared/models/BagHead";

@Component({
  selector: "app-bag",
  templateUrl: "./bag.component.html",
  styleUrls: ["./bag.component.css"],
})
export class BagComponent implements OnInit {
  readonly priceListApi: string = `${environment.serviceApi}price-list-by-mkup/po-combo`;
  public bagHead = {} as BagHead;

  setBagHead(bagHead: BagHead) {
    this.bagHead = bagHead;
  }

  getBagHead(): BagHead {
    return this.bagHead;
  }

  ngOnInit() {}

}
