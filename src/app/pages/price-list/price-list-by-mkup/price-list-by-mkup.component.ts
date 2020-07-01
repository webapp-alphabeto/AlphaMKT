import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";
import { PriceListByMkup } from "src/app/shared/models/PriceListByMkup";
import {
  PoModalComponent,
  PoModalAction,
  PoTableColumn,
  PoTableAction,
} from "@po-ui/ng-components";
import { PriceListService } from "../services/price-list.service";
import { Observable } from "rxjs";
import { PriceListProductPreviewComponent } from '../price-list-product-preview/price-list-product-preview.component';

@Component({
  selector: "app-price-list-by-mkup",
  templateUrl: "./price-list-by-mkup.component.html",
  styleUrls: ["./price-list-by-mkup.component.css"],
})
export class PriceListByMkupComponent implements OnInit, OnChanges {
  @ViewChild("modalEditMkup", { static: true }) modalEditMkup: PoModalComponent;
  @Input() salesOpportunityId: number;

  primaryModalEditMkup: PoModalAction = {
    label: "Salvar",
    action: () => this.save(),
  };

  columns: Array<PoTableColumn> = [
    { property: "name", label: "Nome" },
    { property: "alias", label: "Apelido" },
    { property: "mkup", label: "Mkup" },
    { property: "termination", label: "Terminação" },
  ];

  actions: Array<PoTableAction> = [
    { label: "Deletar", action: this.delete.bind(this) },
    { label: "Editar", action: this.edit.bind(this) },
  ];

  mkup = {} as PriceListByMkup;
  mkups: Array<PriceListByMkup> = [];

  constructor(private priceListService: PriceListService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.salesOpportunityId) {
      this.get();
      
    }
  }

  new() {
    this.mkup = {} as PriceListByMkup;
    this.modalEditMkup.open();
  }

  edit(mkup: PriceListByMkup) {
    this.mkup = mkup;
    this.modalEditMkup.open();
  }

  get() {
    this.priceListService
      .get(this.salesOpportunityId)
      .subscribe((x) => (this.mkups = x));
  }

  save() {
    this.primaryModalEditMkup.loading = true;
    let service: Observable<PriceListByMkup> = this.CreateOrUpdate();

    service.subscribe(
      () => {
        this.get();
        this.mkup = {} as PriceListByMkup;
      },
      () => {},
      () => {
        this.primaryModalEditMkup.loading = false;
        this.modalEditMkup.close();
      }
    );
  }

  private CreateOrUpdate() {
    this.mkup.salesOpportunityId = this.salesOpportunityId;
    if (this.mkup.id > 0) return this.priceListService.put(this.mkup);
    else return this.priceListService.post(this.mkup);
  }

  delete(mkup: PriceListByMkup) {
    this.priceListService.delete(mkup.id).subscribe(() => {
      this.get();
    });
  }
}
