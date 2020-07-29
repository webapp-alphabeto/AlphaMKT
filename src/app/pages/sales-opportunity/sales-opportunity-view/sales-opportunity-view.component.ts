import { Component, OnInit } from "@angular/core";
import {
  PoPageAction,
  PoBreadcrumb,
  PoNotificationService,
  PoDialogService,
  PoDialogType,
} from "@po-ui/ng-components";
import { FilterDateOnlyActive } from "../interfaces/FilterDateOnlyActive";
import { SalesOpportunityService } from "../services/sales-opportunity.service";
import { SalesOpportunity } from "src/app/shared/models/SalesOpportunity";

import * as moment from "moment";

@Component({
  selector: "app-sales-opportunity-view",
  templateUrl: "./sales-opportunity-view.component.html",
  styleUrls: ["./sales-opportunity-view.component.css"],
})
export class SalesOpportunityViewComponent implements OnInit {
  salesOpportunitys: Array<SalesOpportunity>;

  filter: FilterDateOnlyActive = {
    start: moment().subtract(1, "month").toDate(),
    end: new Date(),
    onlyActive: true
  };

  public readonly actions: Array<PoPageAction> = [
    {
      label: "Nova oportunidade",
      icon: "po-icon po-icon-plus",
      url: "./oportunidade-de-venda/oportunidade-de-venda-novo",
    },
  ];

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Oportunidades de venda" }],
  };

  constructor(
    private salesOpportunityService: SalesOpportunityService,
    private poNotification: PoNotificationService,
    private poDialog: PoDialogService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  get() {
    if (!this.filter.start || !this.filter.end) {
      this.poNotification.error(`Os campos de data são obrigatório.`);
      return;
    }
    
    this.salesOpportunityService
      .get(this.filter)
      .subscribe((x) => (this.salesOpportunitys = x));
  }

  deleteById(salesOpportunity: SalesOpportunity) {
    this.poDialog.openDialog(PoDialogType.Confirm, {
      confirm: () => {
        this.salesOpportunityService
          .deleteById(salesOpportunity.id)
          .subscribe(() => {
            this.poNotification.success("Oportunidade deletada");
            this.get();
          });
      },
      title: "Deseja mesmo deletar essa oportunidade?",
      message:
        "Se houver movimento para essa oportunidade, não será possível deletar.",
      literals: {
        confirm: "Confirmar",
      },
    });
  }
}
