import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";
import { PoTableColumn, PoTableAction } from "@po-ui/ng-components";
import { SalesOpportunityRestrictionByRepresentative } from "src/app/shared/models/SalesOpportunityRestrictionByRepresentative";
import { SalesOpportunityRestrictionByFilterProducts } from "src/app/shared/models/SalesOpportunityRestrictionByFilterProducts";
import { SalesOpportunityRestrictionByFilterProductService } from "../../services/sales-opportunity-restriction-by-filter-product.service";
import { RestrictionByFilterProductView } from "../../interfaces/RestrictionByFilterProductView";
import { SalesOpportunity } from "src/app/shared/models/SalesOpportunity";
import { TypeRestrictionProduct } from "src/app/shared/enums/TypeRestrictionProduct";
import { SalesOpportunityService } from "../../services/sales-opportunity.service";

@Component({
  selector: "app-sales-opportunity-products",
  templateUrl: "./sales-opportunity-products.component.html",
  styleUrls: ["./sales-opportunity-products.component.css"],
})
export class SalesOpportunityProductsComponent implements OnInit {
  @Input() salesOpportunityId: number;
  @Input() salesOpportunity = {} as SalesOpportunity;

  serviceApiCollection = `${environment.serviceApi}util/produto/colecao`;
  serviceApiMap = `${environment.serviceApi}util/produto/mapa`;

  filterProducts: Array<RestrictionByFilterProductView> = [];
  filterProduct = {} as SalesOpportunityRestrictionByFilterProducts;

  columns: Array<PoTableColumn> = [
    { property: "id", visible: false },
    { property: "name", label: "Filtro" },
  ];

  actions: Array<PoTableAction> = [
    { label: "Deletar", action: this.delete.bind(this) },
  ];

  constructor(
    private restricitionServices: SalesOpportunityRestrictionByFilterProductService,
    private salesOpportunityServices: SalesOpportunityService
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
    this.filterProduct.salesOpportunityId = this.salesOpportunityId;
    this.restricitionServices.post(this.filterProduct).subscribe(() => {
      this.get();
    });
  }

  get() {
    this.restricitionServices
      .getByOpportunityId(this.salesOpportunityId)
      .subscribe((x) => (this.filterProducts = x));
  }

  isByFilter(): boolean {
    return (
      this.salesOpportunity.typeRestrictionProduct ===
      TypeRestrictionProduct.ByFilter
    );
  }

  update() {
    this.salesOpportunityServices
      .put(this.salesOpportunity)
      .subscribe(() => {});
  }
}