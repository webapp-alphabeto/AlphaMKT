import { Component, OnInit } from "@angular/core";
import { PoPageDynamicTableActions } from "@po-ui/ng-templates/lib/components/po-page-dynamic-table/interfaces/po-page-dynamic-table-actions.interface";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { environment } from "src/environments/environment";
import { TokenService } from "src/app/core/services/token.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"],
})
export class ClientsComponent implements OnInit {
  public readonly serviceApi = `${environment.serviceApi}representative-area/my-client/${this.tokenService.Claims.representativeId}`;

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {}

  public readonly actions: PoPageDynamicTableActions = {
    new: "representante/cliente-novo",
    edit: "representante/client-edit/:id",
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Clientes" }],
  };

  public readonly fields: Array<any> = [
    { property: "id", key: true, visible: false },
    { property: "fantasyName", label: "Nome", gridColumns: 6 },
    { property: "contact", label: "Contato", gridColumns: 6, duplicate: true },
    { property: "phone", label: "Telefone", gridColumns: 6 },
    { property: "email", label: "Email", gridColumns: 6 },
    { property: "city", label: "Cidade", gridColumns: 6 },
    { property: "uf", label: "UF", gridColumns: 6 },
  ];
}
