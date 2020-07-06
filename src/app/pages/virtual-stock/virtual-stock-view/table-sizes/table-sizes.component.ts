import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { VirtualStockBySize } from "../../interfaces/VirtualStockBySize";
import { PoTableColumn } from "@po-ui/ng-components";

@Component({
  selector: "app-table-sizes",
  templateUrl: "./table-sizes.component.html",
  styleUrls: ["./table-sizes.component.css"],
})
export class TableSizesComponent implements OnInit {
  @Input() sizes: VirtualStockBySize[] = [];
  @Output() update = new EventEmitter();

  sizeColumns: Array<PoTableColumn> = [
    { property: "productId", label: "Código", width: "30%" },
    { property: "color", label: "Cor", width: "30%" },
    { property: "size", label: "Tamanho", width: "10%" },
    { property: "balance", label: "Saldo", type: "cellTemplate", width: "30%" },
  ];
  constructor() {}

  ngOnInit(): void {}

  inUpdate(item: VirtualStockBySize) {
    this.update.emit(item);
  }

  sumBalanceByReference(arrayToSum: VirtualStockBySize[]): number {
    if (!arrayToSum || arrayToSum.length == 0) return 0;
    return arrayToSum
      .map((x) => x.balance)
      .reduce((x, y) => {
        return x + y;
      });
  }
}
