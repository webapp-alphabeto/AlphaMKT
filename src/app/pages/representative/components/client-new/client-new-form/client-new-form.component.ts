import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { environment } from "src/environments/environment";
import { NewClient } from "../../../interfaces/NewClient";
import { ClientService } from "../../../services/client.service";
import { TokenService } from "src/app/core/services/token.service";
import { DataClient } from '../../../interfaces/DataClient';

@Component({
  selector: "app-client-new-form",
  templateUrl: "./client-new-form.component.html",
  styleUrls: ["./client-new-form.component.css"],
})
export class ClientNewFormComponent implements OnInit {
  @ViewChild("clienteForm", { static: true }) clienteForm: NgForm;
  @Input() clientEdit = {} as NewClient;

  creditRating: string = "-.- ---";
  cityService = `${environment.serviceApi}cidades/po-combo`;

  constructor(
    private clientService: ClientService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.clientEdit.representativeId = this.tokenService.Claims.representativeId;
  }

  consultCustomer() {
    
    const document = this.clientEdit.document;

    this.clientService
      .get(document, this.tokenService.Claims.representativeId)
      .subscribe((response: DataClient) => {
        const client = response.client as NewClient;
        this.assignClientProperties(client);
        this.creditRating =
          response.queryData.resultadoAnalise.classificacao;
      });
  }

  private assignClientProperties(cliente: NewClient) {
    const propriedades = Object.keys(cliente);
    for (const propriedade of propriedades)
      this.clientEdit[propriedade] = cliente[propriedade];
  }

  creditLimitColor(): string {
    if (this.creditRating == "Sem análise") return "danger";
    if (this.clientEdit.creditLimit > 0) return "success";
    return "info";
  }
}
