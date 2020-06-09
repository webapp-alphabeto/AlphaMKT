import { Component, OnInit } from "@angular/core";
import { PoPageDynamicTableActions } from "@po-ui/ng-templates/lib/components/po-page-dynamic-table/interfaces/po-page-dynamic-table-actions.interface";
import { PoBreadcrumb } from "@po-ui/ng-components";
import { environment } from "src/environments/environment";
import { TokenService } from "src/app/core/services/token.service";

@Component({
  selector: "app-clientes",
  templateUrl: "./clientes.component.html",
  styleUrls: ["./clientes.component.css"],
})
export class ClientesComponent implements OnInit {
  public readonly serviceApi = `${environment.serviceApi}representative-area/my-client/${this.tokenService.DadosDoUsuario.representanteId}`;

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {}

  public readonly actions: PoPageDynamicTableActions = {
    new: "representante/cliente-novo",
    edit: 'representante/client-edit/:id'
  };

  public readonly breadcrumb: PoBreadcrumb = {
    items: [{ label: "Home", link: "/" }, { label: "Clientes" }],
  };

  public readonly fields: Array<any> = [
    { property: "id", key: true, visible: false },
    { property: "nomeFantasia", label: "Nome", gridColumns: 6 },
    { property: "contato", label: "Contato", gridColumns: 6, duplicate: true },
    { property: "telefone", label: "Telefone", gridColumns: 6 },
    { property: "email", label: "Email", gridColumns: 6 },
    { property: "cidade", label: "Cidade", gridColumns: 6 },
    { property: "uf", label: "UF", gridColumns: 6 },
  ];
}
