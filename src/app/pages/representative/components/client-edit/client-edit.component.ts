import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { MyClientEdit } from "../../interfaces/MyClientEdit";
import { ClientService } from '../../services/client.service';

@Component({
  selector: "app-client-edit",
  templateUrl: "./client-edit.component.html",
  styleUrls: ["./client-edit.component.css"],
})
export class ClientEditComponent implements OnInit {
  clientId: number;
  client: MyClientEdit;

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
    private clientService: ClientService
  ) {
    this.route.params.subscribe((x) => {
      this.clientId = parseInt(x["id"]);
    });
  }

  ngOnInit(): void {
    this.getClientById();
  }

  getClientById() {
    this.clientService
      .getById(this.clientId)
      .subscribe((x: MyClientEdit) => {
        this.client = x;
        this.updateBreadCrumb();        
      });
  }

  private updateBreadCrumb() {
    this.breadcrumb.items[2].label = this.client.client.fantasyName ?? "Cliente";
  }
}
