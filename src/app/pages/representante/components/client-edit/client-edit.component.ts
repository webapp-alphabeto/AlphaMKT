import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { MyClientService } from "../../services/my-client.service";
import { IMyClientEdit } from "../../interfaces/imy-client";

@Component({
  selector: "app-client-edit",
  templateUrl: "./client-edit.component.html",
  styleUrls: ["./client-edit.component.css"],
})
export class ClientEditComponent implements OnInit {
  clientId: number;
  client: IMyClientEdit;

  public breadcrumb: PoBreadcrumb = {
    items: [
      {
        label: "Home",
        link: "/",
      },
      {
        label: "Clientes",
        link: "/representante/clientes",
      },
      {
        label: "Cliente",
      },
    ],
  };

  constructor(
    private route: ActivatedRoute,
    private myClientService: MyClientService
  ) {
    this.route.params.subscribe((x) => {
      this.clientId = parseInt(x["id"]);
    });
  }

  ngOnInit(): void {
    this.getClientById();
  }

  getClientById() {
    this.myClientService
      .getById(this.clientId)
      .subscribe((x: IMyClientEdit) => {
        this.client = x;
        this.updateBreadCrumb();        
      });
  }

  private updateBreadCrumb() {
    this.breadcrumb.items[2].label = this.client.cliente.nomeFantasia ?? "Cliente";
  }
}
