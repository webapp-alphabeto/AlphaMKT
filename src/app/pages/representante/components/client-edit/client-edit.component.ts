import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { MyClientService } from "../../services/my-client.service";

@Component({
  selector: "app-client-edit",
  templateUrl: "./client-edit.component.html",
  styleUrls: ["./client-edit.component.css"],
})
export class ClientEditComponent implements OnInit {
  clientId: number;
  client: any;

  public readonly breadcrumb: PoBreadcrumb = {
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

  ngOnInit(): void {}

  getClientById(id: number) {
    this.myClientService.getById(id).subscribe((x) => {
      this.client = x;
    });
  }
}
