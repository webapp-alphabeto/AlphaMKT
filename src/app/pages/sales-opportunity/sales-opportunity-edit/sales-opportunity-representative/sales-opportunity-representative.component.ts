import { Component, OnInit, Input } from "@angular/core";
import { environment } from 'src/environments/environment';
import { RestrictionByRepresentativeView } from '../../interfaces/RestrictionByRepresentativeView';
import { SalesOpportunityRestrictionByRepresentative } from 'src/app/shared/models/SalesOpportunityRestrictionByRepresentative';
import { PoTableColumn, PoTableAction } from '@po-ui/ng-components';
import { SalesOpportunityRestrictionByRepresentativeService } from '../../services/sales-opportunity-restriction-by-representative.service';

@Component({
  selector: "app-sales-opportunity-representative",
  templateUrl: "./sales-opportunity-representative.component.html",
  styleUrls: ["./sales-opportunity-representative.component.css"],
})
export class SalesOpportunityRepresentativeComponent implements OnInit {
  @Input() salesOpportunityId: number;

  serviceApiRepresentative = `${environment.serviceApi}representante/po-combo`;

  representatives: Array<RestrictionByRepresentativeView> = [];
  representative = {} as SalesOpportunityRestrictionByRepresentative;

  columns: Array<PoTableColumn> = [
    { property: "id", visible: false },
    { property: "name", label: "Representante" },
  ];

  actions: Array<PoTableAction> = [
    { label: "Deletar", action: this.delete.bind(this) },
  ];

  constructor(
    private restricitionServices: SalesOpportunityRestrictionByRepresentativeService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  delete(representative: SalesOpportunityRestrictionByRepresentative) {
    this.restricitionServices.delete(representative.id).subscribe(() => {
      this.get();
    });
  }

  add() {
    this.representative.salesOpportunityId = this.salesOpportunityId;
    this.restricitionServices.post(this.representative).subscribe(() => {
      this.get();
    });
  }

  get() {
    this.restricitionServices
      .getByOpportunityId(this.salesOpportunityId)
      .subscribe((x) => (this.representatives = x));
  }
}
