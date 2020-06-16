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
  @Input() clienteEdit = {} as NewClient;

  classificacaoDeCredito: string = "-.- ---";
  cidadeService = `${environment.serviceApi}cidades/po-combo`;

  constructor(
    private clienteService: ClientService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.clienteEdit.representativeId = this.tokenService.Claims.representativeId;
  }

  consultCustomer() {
    
    const documento = this.clienteEdit.document;

    this.clienteService
      .get(documento, this.tokenService.Claims.representativeId)
      .subscribe((resposta: DataClient) => {
        const cliente = resposta.client as NewClient;
        this.atribuirPropriedadesDocliente(cliente);
        this.classificacaoDeCredito =
          resposta.queryData.resultadoAnalise.classificacao;
      });
  }

  private atribuirPropriedadesDocliente(cliente: NewClient) {
    const propriedades = Object.keys(cliente);
    for (const propriedade of propriedades)
      this.clienteEdit[propriedade] = cliente[propriedade];
  }

  corDoLimiteDeCredito(): string {
    if (this.classificacaoDeCredito == "Sem análise") return "danger";
    if (this.clienteEdit.creditLimit > 0) return "success";
    return "info";
  }
}
