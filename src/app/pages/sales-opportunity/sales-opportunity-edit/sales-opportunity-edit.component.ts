import { Component, OnInit } from "@angular/core";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { ActivatedRoute } from "@angular/router";
import { SalesOpportunityService } from "../services/sales-opportunity.service";
import { SalesOpportunity } from "src/app/shared/models/SalesOpportunity";

@Component({
  selector: "app-sales-opportunity-edit",
  templateUrl: "./sales-opportunity-edit.component.html",
  styleUrls: ["./sales-opportunity-edit.component.css"],
})
export class SalesOpportunityEditComponent implements OnInit {
  salesOpportunityId: number;
  salesOpportunity = {} as SalesOpportunity;

  public readonly breadcrumb: PoBreadcrumb = {
    items: [
      { label: "Home", link: "/" },
      { label: "Oportunidades de venda", link: "/oportunidade-de-venda" },
      { label: this.salesOpportunityId == 0 ? "Novo" : "Editar" },
    ],
  };

  constructor(
    route: ActivatedRoute,
    private salesOpportunityService: SalesOpportunityService
  ) {
    route.params.subscribe(
      (x) => (this.salesOpportunityId = parseInt(x["id"] ?? 0))
    );
  }

  ngOnInit(): void {
    if (this.salesOpportunityId > 0) this.getById();
  }

  getById() {
    this.salesOpportunityService
      .getById(this.salesOpportunityId)
      .subscribe((x) => {
        this.salesOpportunity = this.salesOpportunityService.mapSalesOpportunity(
          x
        );
      });
  }
}
