import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
} from "@angular/core";
import { PriceListViewService } from "../services/price-list-view.service";
import { PoTableColumn } from "@po-ui/ng-components";
import { ProductsView } from "../interfaces/ProductsView";
import { PriceListProductPreview } from "../interfaces/PriceListProductPreview";
@Component({
  selector: "app-price-list-product-preview",
  templateUrl: "./price-list-product-preview.component.html",
  styleUrls: ["./price-list-product-preview.component.css"],
})
export class PriceListProductPreviewComponent implements OnInit, OnChanges {
  @Input() salesOpportunityId: number;
  columns: Array<PoTableColumn> = [
    { property: "photo", width: "10%", label: "Foto", type: "cellTemplate" },
    { property: "reference", width: "10%", label: "Referência" },
    {
      property: "priceList",
      width: "20%",
      label: "Preços",
      type: "cellTemplate",
    },
    { property: "model", width: "30%", label: "Modelo" },
    { property: "category", width: "10%", label: "Categoria" },
  ];

  priceListColumns: Array<PoTableColumn> = [
    { property: "name", label: "Tabela" },
    {property:"mkup", label:"Mkup"},
    {
      property: "originPrice",
      label: "Preço (base)",
      tooltip: "TB27",
      type: "currency",
      format: "BRL",
    },
    {
      property: "finalPrice",
      label: "Preço",
      type: "currency",
      format: "BRL",
    },
  ];
  groupProducts: PriceListProductPreview[];
  productsFiltersByReference: ProductsView[] = [];
  products: ProductsView[] = [];
  paginated: number = 1;
  highlightProduct = {} as ProductsView;
  referenceFilter: string;

  constructor(private priceListViewService: PriceListViewService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.salesOpportunityId) {
      this.get();
    }
  }

  get() {
    this.priceListViewService.get(this.salesOpportunityId).subscribe((x) => {
      this.groupProducts = x;
      this.products = x[0].products;
    });
  }

  getByReference() {
    this.productsFiltersByReference.length = 0;
    this.groupProducts.map((x) => {
      x.products
        .filter((x) => x.reference == this.referenceFilter)
        .map((y) => {
          this.productsFiltersByReference.push(y);
        });
    });
  }
}
