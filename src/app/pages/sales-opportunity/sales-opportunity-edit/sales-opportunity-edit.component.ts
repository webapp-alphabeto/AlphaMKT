import { Component, OnInit } from "@angular/core";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sales-opportunity-edit",
  templateUrl: "./sales-opportunity-edit.component.html",
  styleUrls: ["./sales-opportunity-edit.component.css"],
})
export class SalesOpportunityEditComponent implements OnInit {
  salesOpportunityId: number;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: "Home", link: "/" },
      { label: "Oportunidades de venda", link: "/oportunidade-de-venda" },
      { label: "Novo" },
    ],
  };

  constructor(route: ActivatedRoute) {
    route.params.subscribe(
      (x) => (this.salesOpportunityId = parseInt(x["id"] ?? 0))
    );
  }

  ngOnInit(): void {
  }
}
