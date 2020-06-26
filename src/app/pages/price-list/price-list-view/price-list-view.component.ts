import { Component, OnInit } from "@angular/core";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-price-list-view",
  templateUrl: "./price-list-view.component.html",
  styleUrls: ["./price-list-view.component.css"],
})
export class PriceListViewComponent implements OnInit {
  salesOpportunityId: number;
  serviceApiSalesOpportunity = `${environment.serviceApi}sales-opportunity/po-combo`;

  breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Tabela de preços" }],
  };

  constructor() {}

  ngOnInit(): void {}

  get() {}
}
