import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { environment } from "src/environments/environment";
import { VirtualStockGroupByReference } from "../interfaces/VirtualStockGroupByReference";
import {
  PoTableColumn,
  PoButtonGroupItem,
  PoButtonComponent,
  PoDialogType,
  PoDialogService,
} from "@po-ui/ng-components";
import { VirtualStockGroupView } from "../interfaces/VirtualStockGroupView";
import { VirtualStockService } from "../services/virtual-stock.service";
import { VirtualStockBySize } from "../interfaces/VirtualStockBySize";
import { VirtualStockEdit } from "../interfaces/VirtualStockEdit";
import { saveAs } from "file-saver";
import { MenuService } from "src/app/shared/services/menu.service";

@Component({
  selector: "app-virtual-stock-view",
  templateUrl: "./virtual-stock-view.component.html",
  styleUrls: ["./virtual-stock-view.component.css"],
})
export class VirtualStockViewComponent implements OnInit, OnChanges {
  @ViewChild("importationModel", { read: ElementRef, static: true })
  importationModelRef: PoButtonComponent;

  columns: Array<PoTableColumn> = [
    { property: "photo", width: "20%", label: "Foto", type: "cellTemplate" },
    { property: "reference", width: "10%", label: "Referência" },
    { property: "model", width: "20%", label: "Nome" },
    {
      property: "sizes",
      width: "55%",
      label: "Tamanhos",
      type: "cellTemplate",
    },
  ];

  serviceApiSalesOpportunity = `${environment.serviceApi}sales-opportunity/po-combo`;
  serviceApiUpload = `${environment.serviceApi}virtual-stock/upload`;
  paginated: number = 1;
  salesOpportunityId: number = 1;
  virtualStock: VirtualStockGroupView[] = [];
  buttons: Array<PoButtonGroupItem> = [];
  references: VirtualStockGroupByReference[] = [];
  highlightReference = {} as VirtualStockGroupByReference;
  referenceFilter: string;

  constructor(
    private virtualStockServices: VirtualStockService,
    private poDialog: PoDialogService,
    menuService: MenuService
  ) {
    menuService.exibirMenu();
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.salesOpportunityId) this.get();
  }

  get() {
    this.virtualStockServices.get(this.salesOpportunityId).subscribe((x) => {
      this.virtualStock = x;
      this.references = x[0].references;
      this.fillButtons();
    });
  }

  fillButtons() {
    this.buttons = this.virtualStock.map((x) => {
      return {
        label:
          x.collection +
          " | " +
          x.map +
          " (" +
          this.sumBalance(x.collection, x.map) +
          ")",
        action: () => {
          this.references = x.references;
        },
      };
    });

    this.buttons[0].selected = true;
  }

  update(item: VirtualStockBySize) {
    let itemEdit: VirtualStockEdit = {
      balance: item.balance,
      productId: item.productId,
      salesOpportunityId: this.salesOpportunityId,
    };

    this.virtualStockServices.post(itemEdit).subscribe(() => {
      this.fillButtons();
    });
  }

  sumBalance(collection: string = null, map: string = null): number {
    let arrayToSum = this.virtualStock;

    if (collection && map)
      arrayToSum = this.virtualStock.filter(
        (x) => x.collection == collection && x.map == map
      );

    if (arrayToSum.length === 0) return 0;

    return arrayToSum
      .flatMap((group) =>
        group.references.flatMap((reference) =>
          reference.sizes.flatMap((size) => size.balance)
        )
      )
      .reduce((x, y) => {
        return x + y;
      });
  }

  download() {
    this.virtualStockServices
      .download(this.salesOpportunityId)
      .subscribe((data: any) => {
        const blob = new Blob([data], { type: "application/octet-stream" });
        const fileName = "virtual-stock.csv";
        saveAs(blob, fileName);
      });
  }

  upload(event: any) {
    event.data.salesOpportunityId = this.salesOpportunityId;
  }

  delete() {
    this.poDialog.openDialog(PoDialogType.Confirm, {
      confirm: () => {
        this.deleteAll();
      },
      message:
        "Deseja deletar todo o estoque, se já houver vendas essa operação não será possível",
      title: "Estoque virtual",
    });
  }

  deleteAll() {
    this.virtualStockServices
      .deleteAll(this.salesOpportunityId)
      .subscribe(() => {
        this.get();
      });
  }
}
