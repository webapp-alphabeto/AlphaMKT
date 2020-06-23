import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestrictionBySalesGroupView } from '../../interfaces/RestrictionBySalesGroupView';
import { SalesOpportunityRestrictionBySalesGroup } from 'src/app/shared/models/SalesOpportunityRestrictionBySalesGroup';
import { PoTableColumn, PoTableAction } from '@po-ui/ng-components';
import { SalesOpportunityRestrictionBySalesGroupService } from '../../services/sales-opportunity-restriction-by-sales-group.service';

@Component({
  selector: 'app-sales-opportunity-sales-group',
  templateUrl: './sales-opportunity-sales-group.component.html',
  styleUrls: ['./sales-opportunity-sales-group.component.css']
})
export class SalesOpportunitySalesGroupComponent implements OnInit {

  @Input() salesOpportunityId: number;

  serviceApiSalesGroup = `${environment.serviceApi}grupo-de-vendas/po-combo`;

  salesGroups: Array<RestrictionBySalesGroupView> = [];
  salesGroup = {} as SalesOpportunityRestrictionBySalesGroup;

  columns: Array<PoTableColumn> = [
    { property: "id", visible: false },
    { property: "name", label: "Grupo de vendas" },
  ];

  actions: Array<PoTableAction> = [
    { label: "Deletar", action: this.delete.bind(this) },
  ];

  constructor(
    private restricitionServices: SalesOpportunityRestrictionBySalesGroupService
  ) {}

  ngOnInit(): void {
    this.get();
  }

  delete(salesGroup: SalesOpportunityRestrictionBySalesGroup) {
    this.restricitionServices.delete(salesGroup.id).subscribe(() => {
      this.get();
    });
  }

  add() {
    this.salesGroup.salesOpportunityId = this.salesOpportunityId;
    this.restricitionServices.post(this.salesGroup).subscribe(() => {
      this.get();
    });
  }

  get() {
    this.restricitionServices
      .getByOpportunityId(this.salesOpportunityId)
      .subscribe((x) => (this.salesGroups = x));
  }
}
