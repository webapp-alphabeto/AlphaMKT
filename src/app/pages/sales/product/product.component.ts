import { Component, OnInit } from "@angular/core";
import { ToolBarService } from "src/app/shared/services/tool-bar.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"],
})
export class ProductComponent implements OnInit {
  constructor(private toolBarService: ToolBarService) {
    this.toolBarService.ocultar();
  }

  ngOnInit(): void {}
}
