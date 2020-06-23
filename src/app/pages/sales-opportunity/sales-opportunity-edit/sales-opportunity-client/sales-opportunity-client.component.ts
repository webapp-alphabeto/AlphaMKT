import { Component, OnInit, Input } from "@angular/core";
import {
  PoTableColumn,
  PoTableAction,
  PoComboOption,
} from "@po-ui/ng-components";
import { SalesOpportunityRestrictionByClient } from "src/app/shared/models/SalesOpportunityRestrictionByClient";
import { SalesOpportunity } from "src/app/shared/models/SalesOpportunity";
import { environment } from "src/environments/environment";
import { SalesOpportunityRestrictionByClientService } from "../../services/sales-opportunity-restriction-by-client.service";
import { RestrictionByClientView } from '../../interfaces/RestrictionByClientView';

@Component({
  selector: "app-sales-opportunity-client",
  templateUrl: "./sales-opportunity-client.component.html",
  styleUrls: ["./sales-opportunity-client.component.css"],
})
export class SalesOpportunityClientComponent implements OnInit {
  @Input() salesOpportunityId: number;

  serviceApiClient = `${environment.serviceApi}cliente/po-combo`;

  clients: Array<RestrictionByClientView> = [];
  client = {} as SalesOpportunityRestrictionByClient;

  columns: Array<PoTableColumn> = [
    { property: "id", visible: false },
    { property: "name", label: "Cliente" },
  ];

  actions: Array<PoTableAction> = [
    { label: "Deletar", action: this.delete.bind(this) },
  ];

  constructor(
    private restricitionServices: SalesOpportunityRestrictionByClientService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  delete(client: SalesOpportunityRestrictionByClient) {
    this.restricitionServices.delete(client.id).subscribe(() => {
      this.get();
    });
  }

  add() {
    this.client.salesOpportunityId = this.salesOpportunityId;
    this.restricitionServices.post(this.client).subscribe(() => {
      this.get();
    });
  }

  get() {
    this.restricitionServices
      .getByOpportunityId(this.salesOpportunityId)
      .subscribe((x) => (this.clients = x));
  }
}
